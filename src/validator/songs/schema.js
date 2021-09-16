const { string, number } = require('joi');
const Joi = require('joi');

const SongPayloadSchema = Joi.object({
  title: Joi.string().required(),
  year: Joi.number().required(),
  performer: Joi.string().required(),
  genre: string(),
  duration: number(),
});

module.exports = SongPayloadSchema;
