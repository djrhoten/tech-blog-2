const sequelize = require('../config/connection');
const { User, Post } = require('../models');

const userdata = [
  {
    username: 'JamesBlank',
    password: 'password123'
  },
  {
    username: 'JillValentine',
    password: 'password123'
  },
  {
    username: 'RockyRaccoon',
    password: 'password123'
  },
  {
    username: 'Bill&Ted',
    password: 'password123'
  },
  {
    username: 'JaquesEtch',
    password: 'password123'
  },
  {
    username: 'PurpBurp',
    password: 'password123'
  },
  {
    username: 'LeggoEggo',
    password: 'password123'
  },
  {
    username: 'AustinCool',
    password: 'password123'
  },
  {
    username: 'TrickyTrina',
    password: 'password123'
  },
  {
    username: 'JimmyCrackCorn',
    password: 'password123'
  }
];

const seedUsers = () => User.bulkCreate(userdata, { individualHooks: true });

module.exports = seedUsers;