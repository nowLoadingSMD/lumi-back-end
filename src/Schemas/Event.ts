import { Schema, model, Document } from 'mongoose'

import { VideoInterface } from './Video'
import { CourseInterface } from './Course'
import { TeacherInterface } from './Teacher'

export interface EventInterface extends Document {
    name: string,
    description?: string,
    videos?: Array<VideoInterface>,
    date: Date,
    course: CourseInterface,
    teacher: TeacherInterface
}

export const EventSchema = new Schema({
  name: { type: String, required: true },
  description: String,
  videos: [{ type: Schema.Types.ObjectId, ref: 'Video' }],
  date: { type: Schema.Types.Date, required: true },
  course: { type: Schema.Types.ObjectId, ref: 'Event' },
  teacher: { type: Schema.Types.ObjectId, ref: 'Teacher' }
},
{
  timestamps: true
})

export default model<EventInterface>('Event', EventSchema)