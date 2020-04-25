
export default class SwapiService{

    _apiBase = 'https://swapi.dev/api';
  
    async getResource (url){
    const res = await fetch(`${this._apiBase}${url}`);
    
    if(!res.ok){
      throw new Error(`Could not fetch ${url}` 
          + `, received ${res.status}`);
    }
  
    return await res.json();
    }
  
    async getAllPeople(){
      const res = await this.getResource('/people/');
      return res.results.map(this._transformPerson);
    }
  
    async getPerson(id){
      const person = await this.getResource(`/people/${id}/`);
      return this._transformPerson(person);
    }
  
    async getAllPlanets(){
      const res = await this.getResource('/planets/');
      return res.results.map(this._transformPlanet);
    }
    
    async getPlanet(id){
       const planet = await this.getResource(`/planets/${id}/`);
       return this._transformPlanet(planet);
    }
  
    async getAllStarships(){
      const res = await this.getResource('/starships/');
      return res.results.map(this._transformStarship);
    }
  
    async getStatship(id){
      const starship = await this.getResource(`/starships/${id}/`);
      return this._transformStarship(starship);
    }

    _extractId(item){
      const idRegExp = /\/([0-9]*)\/$/;
      const id = item.url.match(idRegExp)[1];
      return id;
    }

    _transformPlanet(planet){
      return{
          id: this._extractId(planet),
          name: planet.name,
          population: planet.population,
          rotationPeriond: planet.rotation_period,
          diameter: planet.diameter
      }
    }

    _transformStarship(starship){
      
      return{
          id: this._extractId(starship),
          name: starship.name,
          population: starship.population,
          rotationPeriond: starship.rotation_period,
          diameter: starship.diameter
      }
    }

    _transformPerson(person){
      
      return{
          id: this._extractId(person),
          name: person.name,
          population: person.population,
          rotationPeriond: person.rotation_period,
          diameter: person.diameter
      }
    }

  }