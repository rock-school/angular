# Services 

```typescript
@Injectable({ providedIn: 'root' })
export class APIErrorsHandler {
    
}
```

```typescript
export class Logger {
  log(msg: any)   { console.log(msg); }
  error(msg: any) { console.error(msg); }
  warn(msg: any)  { console.warn(msg); }
}
export class HeroService {
    private heroes: Hero[] = [];

    constructor(
        private backend: BackendService,
        private logger: Logger) { }

    getHeroes() {
        this.backend.getAll(Hero).then( (heroes: Hero[]) => {
            this.logger.log(`Fetched ${heroes.length} heroes.`);
            this.heroes.push(...heroes); // fill cache
        });
        return this.heroes;
    }
}
```

// https://angular.io/guide/understanding-communicating-with-http


