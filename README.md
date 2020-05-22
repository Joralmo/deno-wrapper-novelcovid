#### Wrapper of [novelCOVID API](https://disease.sh) for Deno
<!-- ALL-CONTRIBUTORS-BADGE:START - Do not remove or modify this section -->
[![All Contributors](https://img.shields.io/badge/all_contributors-2-orange.svg?style=flat-square)](#contributors-)
<!-- ALL-CONTRIBUTORS-BADGE:END -->

#### Wrapper of covid-19 API for easy use in deno

[![deno documentation](https://img.shields.io/badge/deno-documentation-tomato?style=flat)](https://doc.deno.land/https/deno.land/x/novelcovid_wrapper/mod.ts)
[![chat](https://img.shields.io/badge/chat-discord-tomato)](https://discord.gg/CCFbnrP)


## Usage

All methods return a promise



For more documentation see the [Doc](https://doc.deno.land/https/deno.land/x/novelcovid_wrapper/mod.ts)



```javascript
import { Wrapper } from 'https://deno.land/x/novelcovid_wrapper/mod.ts';

const wrapper = new Wrapper();

wrapper
    .country('co')
    .then((data) => console.log(data)); // Print data of colombia
```



### Countries

```javascript
/**
 * Get all affected countries data
 * Return and object of type Countries like { data: [Country] }
 */
wrapper
    .countries()
    .then((data) => console.log(data));

/**
 * Get all affected countries ordered data (order by country, cases, todayCases, deaths, todayDeaths, ...)
 * Return and object of type Countries like { data: [Country] }
 */
wrapper
    .countries({ sort: 'country' })
    .then((data) => console.log(data));

/**
 * Get yesterday data of affected countries
 * Return and object of type Countries like { data: [Country] }
 */
wrapper
    .countries({ yesterday: true })
    .then((data) => console.log(data));

/**
 * Get data of continents
 * Return and object of type Countries like { data: [Country] }
 * the data can be ordered sending { sort: 'continent' }
 */
wrapper
    .continents()
    .then((data) => console.log(data));
```



### Continents

```javascript
/**
 * Get data of continents
 * Return and object of type Countries like { data: [Continent] }
 */
wrapper
    .continents()
    .then((data) => console.log(data));


/**
 * Get data of specific continent
 */
wrapper
    .continent('North America')
    .then((data) => console.log(data));
```

### States

```javascript
/**
 * Get data of states
 */
wrapper
    .states()
    .then((data) => console.log(data));

/**
 * Get data of specific state
 */
wrapper
    .state('Northern Mariana Islands')
    .then((data) => console.log(data));
```

### Historical

```javascript
/**
 * Get all historical list
 */
wrapper
    .historical()
    .then((d: any) => console.log(d));

/**
 * Get all historical for a country
 */
wrapper
    .historical({ country: 'USA' })
    .then((d: any) => console.log(d));

/**
 * Get all historical for a province
 */
wrapper
    .historical({ country: 'China', province: 'guangdong' })
    .then((d: any) => console.log(d));

/**
 * Get 5 last days of historical for a province (also works for the country history)
 */
wrapper
    .historical({ country: 'China', province: 'guangdong', days: 5 })
    .then((d: any) => console.log(d));
```

## Contributors ✨

Thanks goes to these wonderful people ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tr>
    <td align="center"><a href="https://medium.com/@geeknees"><img src="https://avatars3.githubusercontent.com/u/701242?v=4" width="100px;" alt=""/><br /><sub><b>Masumi Kawasaki</b></sub></a><br /><a href="https://github.com/Joralmo/deno-wrapper-novelcovid/commits?author=geeknees" title="Documentation">📖</a></td>
    <td align="center"><a href="https://endersonpro.github.io/"><img src="https://avatars0.githubusercontent.com/u/29903127?v=4" width="100px;" alt=""/><br /><sub><b>EndersonPro</b></sub></a><br /><a href="https://github.com/Joralmo/deno-wrapper-novelcovid/commits?author=EndersonPro" title="Code">💻</a></td>
  </tr>
</table>

<!-- markdownlint-enable -->
<!-- prettier-ignore-end -->
<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/all-contributors/all-contributors) specification. Contributions of any kind welcome!