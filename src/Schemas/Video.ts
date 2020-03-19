import { Schema, model, Document } from 'mongoose'

import { ApplauseInterface } from './Applause'
import { TagInterface } from './Tag'
import { CourseInterface } from './Course'
import { SemesterInterface } from './Semester'
import { GenreInterface } from './Genre'
import { CommentInterface } from './Comment'
import { StudentInterface } from './Student'

export interface VideoInterface extends Document {
    owner: Array<StudentInterface>
    title: string,
    description: string,
    duration: number,
    url: string,
    photoUrl?: string,
    applauses?: Array<ApplauseInterface>,
    platform: string,
    tags?: Array<TagInterface>,
    course?: CourseInterface,
    semester?: SemesterInterface,
    genre: GenreInterface,
    comments?: Array<CommentInterface>
}

export const VideoSchema = new Schema({
  owner: { type: Schema.Types.ObjectId, ref: 'Student' },
  title: { type: String, required: true },
  description: { type: String, required: true },
  duration: { type: Number, required: true },
  url: { type: String, required: true },
  photoUrl: { type: String, required: false },
  applauses: [{ type: Schema.Types.ObjectId, ref: 'Applause', required: false }],
  platform: { type: String, required: true },
  tags: [{ type: Schema.Types.ObjectId, ref: 'Tag', required: false }],
  course: { type: Schema.Types.ObjectId, ref: 'Course', required: false },
  semester: { type: Schema.Types.ObjectId, ref: 'Semester', required: false },
  genre: { type: Schema.Types.ObjectId, ref: 'Genre' },
  comments: [{ type: Schema.Types.ObjectId, ref: 'Comment', required: false }]
}, {
  timestamps: true
})

export default model<VideoInterface>('Video', VideoSchema)