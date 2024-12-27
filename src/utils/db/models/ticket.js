import departmentModel from './department';
import subDepartmentModel from './subDepartment';
import usersModel from './user';
const mongoose = require('mongoose');

const schema = mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  body: {
    type: String,
    required: true
  },
  department: {
    type: mongoose.Types.ObjectId,
    ref: 'department',
    required: true
  },
  subDepartment: {
    type: mongoose.Types.ObjectId,
    ref: 'subDepartment'
  },
  priority: {
    type: Number,
    required: true,
    default: 1,
    enum: [1, 2, 3]
  },
  user: {
    type: mongoose.Types.ObjectId,
    ref: 'user',
    required: true
  },
  file: {
    type: String,
    required: false
  },
  isAnswered: {
    type: Boolean,
    default: false,
    required: true
  },
  createdBy: {
    type: String,
    enum: ['user', 'admin'],
    required: true,
    default: 'user' // Default to 'user'
  },
  parentTicket: {
    type: mongoose.Types.ObjectId,
    ref: 'ticket',
    default: null // Default to null for original tickets
  }
}, {
  timestamps: true
});

const ticketsModel = mongoose.models.ticket || mongoose.model('ticket', schema);
export default ticketsModel;