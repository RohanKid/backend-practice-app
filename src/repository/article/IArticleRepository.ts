import { ArticleId } from '../../domain/models/article/valueObject/ArticleId'
import { Article } from '../../domain/models/article/entities/Article'
import { Articles } from '../../domain/models/article/entities/Articles'
import { QueryParameters } from '../../adapter/request/QueryParameters'

export interface IArticleRepository {
  find(id: ArticleId): Promise<Article | null>
  findAll(query: QueryParameters): Promise<Articles | null>
  delete(id: ArticleId): Promise<void>
}
