// @flow
import React from 'react'
import { storiesOf } from '@storybook/react'
// import { action } from '@storybook/addon-actions'
// import { linkTo } from '@storybook/addon-links'
import { MicrolinkCard } from '../src/'

const urls = [
  'https://twitter.com/stripe/status/750230305399681024',
  'https://medium.com/@the_economist/apple-should-shrink-its-finance-arm-before-it-goes-bananas-f7fcdc754091',
  'https://www.theverge.com/2017/10/27/16145498/insecure-broad-city-high-maintenance-web-series-hbo-comedy-central',
  'https://www.washingtonpost.com/sf/local/2017/10/21/in-the-shadows-of-refinery-row-a-parable-of-redevelopment-and-race/?hpid=hp_hp-top-table-main_corpuschristi743pm%3Ahomepage%2Fstory',
  'https://techcrunch.com/2017/10/26/super-mario-odyssey-review-a-masterpiece-of-twists-and-turns/',
  'http://mashable.com/2017/10/19/cybersecurity-hacker-online-course',
  'http://es.engadget.com/2017/10/23/meizu-m6-note-analisis-review-fotos',
  'https://www.youtube.com/watch?v=hwMkbaS_M_c',
  'https://www.nytimes.com/2017/09/19/learning/whats-going-on-in-this-graph-sept-19-2017.html',
  'https://gizmodo.com/drone-video-of-border-wall-prototypes-accidentally-show-1819710328',
  'https://vimeo.com/188175573',
  'https://www.instagram.com/p/BXHj-DllyYU',
  'https://www.bbc.com/news/technology-40762328'
]

storiesOf('small', module).add('square', () => (
  <div>
    {urls.map(url =>
      <MicrolinkCard
        key={url}
        url={url}
        style={{marginBottom: '20px'}}
        />
    )}
  </div>
))

storiesOf('small', module).add('small rounded', () => (
  <div>
    {urls.map(url =>
      <MicrolinkCard
        key={url}
        url={url}
        style={{marginBottom: '20px'}}
        rounded
        />
    )}
  </div>
))

storiesOf('small', module).add('rounded custom', () => (
  <div>
    {urls.map(url =>
      <MicrolinkCard
        key={url}
        url={url}
        style={{marginBottom: '20px'}}
        rounded={'4px'}
        />
    )}
  </div>
))

storiesOf('small', module).add('width custom', () => (
  <div>
    {urls.map(url =>
      <MicrolinkCard
        key={url}
        url={url}
        style={{marginBottom: '20px'}}
        rounded={'4px'}
        height={'150px'}
        />
    )}
  </div>
))

storiesOf('small', module).add('height custom', () => (
  <div>
    {urls.map(url =>
      <MicrolinkCard
        key={url}
        url={url}
        style={{marginBottom: '20px'}}
        rounded={'4px'}
        width={'550px'}
        />
    )}
  </div>
))
