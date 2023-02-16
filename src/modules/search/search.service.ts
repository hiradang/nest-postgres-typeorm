import { Injectable } from '@nestjs/common';
import MeiliSearch, { Index, SearchParams } from 'meilisearch';

@Injectable()
export class SearchService {
  private _client: MeiliSearch;

  constructor() {
    this._client = new MeiliSearch({
      host: 'http://localhost:7700',
      apiKey: 'masterKey',
    });
  }

  private getQuestionIndex(): Index {
    return this._client.index('question');
  }

  public async addDocuments(documents) {
    const index = this.getQuestionIndex();
    return await index.addDocuments(documents);
  }

  public async search(text: string, searchParams?: SearchParams) {
    const index = this.getQuestionIndex();
    return index.search(text, searchParams);
  }
}
