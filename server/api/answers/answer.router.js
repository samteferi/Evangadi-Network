const router = require('express').Router();
const { solveQuestion, getAnswerByQuestionId } = require('./answer.controller');

router.post('/', solveQuestion);
router.get('/', getAnswerByQuestionId);

module.exports = router;