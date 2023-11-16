import { Request } from 'express'
import { HTTP_ERROR_MESSAGE } from '../../http/httpStatus'
import { QueryBodyError } from '../../http/errors/QueryBodyError'

export type QueryBody = {
  title: string
  content: string
}
export class EditArticleRequest {
  readonly body: QueryBody = {
    title: '',
    content: '',
  }
  constructor({ body }: Request) {
    if (!body.title) throw new QueryBodyError(HTTP_ERROR_MESSAGE.QueryBodyError)
    if (body.title) this.body.title = body.title
    if (body.content) this.body.content = body.content
  }
}
