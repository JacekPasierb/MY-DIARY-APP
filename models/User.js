// src/models/User.js
import { DataTypes } from 'sequelize';
import sequelize from '../src/lib/db'; 

const User = sequelize.define('User', {
  username: {
    type: DataTypes.STRING,
    unique: true,
    allowNull: false,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    unique: true,
    allowNull: false,
  }
}, {
  tableName: 'Users', // Używaj cudzysłowów, jeśli tabela ma wielkie litery
  timestamps: true
});

export default User;
