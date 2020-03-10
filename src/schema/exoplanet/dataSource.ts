import { RESTDataSource } from 'apollo-datasource-rest';

export class ArcsecondAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = process.env.ARCSECOND_API;
  }

  async getExoPlanets(total = 1, limit = 10) {
    const data = await this.get('exoplanets', {
      page: total,
      page_size: limit,
    });
    return data.results;
  }
}
