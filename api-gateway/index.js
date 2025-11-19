// Snippet from api-gateway/index.js
const authenticateToken = (req, res, next) => {
    // ... JWT verification logic ...
    
    // Injecting user role for downstream RBAC
    proxyReq.setHeader('X-User-Role', req.user.role); 
    proxyReq.setHeader('X-User-ID', req.user.id);
    next();
};

// Protected route to the sensitive Data Service
app.use(
    '/api/data',
    authenticateToken, 
    createProxyMiddleware(proxyOptions('http://keto-data-service:3001')) 
);
