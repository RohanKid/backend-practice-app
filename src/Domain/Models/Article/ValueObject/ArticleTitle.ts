import { ValueObjectError } from '../../../../http/Errors/ValueObjectError'

export class ArticleTitle {
  constructor(readonly value: string) {
    if (value.length > 120) {
      throw new ValueObjectError('title is less than 120')
    }
  }
}
