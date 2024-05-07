// This server can dynamically forward requests to the directory in an AWS S3 bucket based on the subdomain name of the request
// A reverse proxy is configured to resolve the subdomain and dynamically route the request to the corresponding S3 path
// This allows each subdomain such as "renee.localhost:8000" to be mapped to a specific folder in S3, such as "__outputs/renee"

const express = require('express')
const httpProxy = require('http-proxy')

const app = express()
const PORT = 8000

const BASE_PATH = 'https://vercel-clone-outputs.s3.ap-south-1.amazonaws.com/__outputs'

const proxy = httpProxy.createProxy()

app.use((req, res) => {
    // Get the hostname
    // e.g renee.localhost -> hostname is renee
    const hostname = req.hostname;
    const subdomain = hostname.split('.')[0]; 

    // Custom Domain - DB Query

    const resolvesTo = `${BASE_PATH}/${subdomain}`

    return proxy.web(req, res, { target: resolvesTo, changeOrigin: true })

})

// Set the default route
proxy.on('proxyReq', (proxyReq, req, res) => {
    const url = req.url;
    if (url === '/')
        proxyReq.path += 'index.html'

})

app.listen(PORT, () => console.log(`Reverse Proxy Running..${PORT}`))