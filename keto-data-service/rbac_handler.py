# Snippet from keto-data-service/rbac_handler.py
# Example of configurable permissions (loaded from DB in production)
ACCESS_PERMISSIONS = {
    'patient': ['read-self', 'write-self'],
    'therapist': ['read-assigned'],
};

def check_permission(required_permission):
    userRole = req.header('X-User-Role')
    userId = req.header('X-User-ID')
    requestedPatientId = req.params.patientId
    
    if requiredPermission not in ACCESS_PERMISSIONS.get(userRole, []):
        return res.status(403).json({ message: "Access Denied" });
    
    # Crucial patient privacy check
    if requiredPermission.includes('self') and userId != requestedPatientId:
        return res.status(403).json({ message: "Access Denied: PHI Violation." });
    
    next() # Permission granted
