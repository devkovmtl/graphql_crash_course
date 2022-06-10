const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema(
  {
    name: {
      type: String,
    },
    desription: {
      type: String,
    },
    status: {
      type: String,
      enum: ['Not Started', 'In Progress', 'Completed'],
    },
    clientId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Client',
    },
  },
  {
    timestamps: true,
  }
);
