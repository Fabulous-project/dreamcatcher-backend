// role.middleware.js
const authorizeAdmin = (req, res, next) => {
  const user = req.user

  if (!user || user.role !== 'admin') {
    return res.status(403).json({ message: 'Access denied. Admins only.' })
  }
  next()
}

module.exports = authorizeAdmin