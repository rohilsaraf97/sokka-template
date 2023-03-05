const { Router } = require('express')
const { getDummyController } = require('../../controllers/dummy')

const router = Router()

router.get('/', getDummyController)

module.exports = router
