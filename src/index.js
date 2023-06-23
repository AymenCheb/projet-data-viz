/* eslint-disable jsdoc/require-jsdoc */
/* eslint-disable no-unused-vars */
'use strict'

import * as overview from './overview/index.js'
import * as hashtags from './hashtags/index.js'
import * as videoLength from './video-length/index.js'
import * as songs from './songs/index.js'
import * as videoPosting from './video-posting/index.js'

/**
 * @file This file is the entry-point for the the code for the data viz project of team 10
 * @author Team 10
 * @version v1.0.0
 */

(function (d3) {
  const tabContents = document.getElementsByClassName('tab-content')
  Array.from(tabContents).forEach(tab => {
    tab.style.display = 'none'
  })

  overview.load(d3)

  videoLength.load(d3)
  hashtags.load(d3)
  songs.load(d3)
  videoPosting.load(d3)

  document.getElementById('overview').style.display = 'block' // default tab
  document.getElementById('overview-tab').style.background = '#ffffff11'

  document.getElementById('overview-tab').addEventListener('click', () => {
    displayTab('overview')
    resetStyles()
    document.getElementById('overview-tab').style.background = '#ffffff11'
  })

  document.getElementById('hashtags-tab').addEventListener('click', () => {
    displayTab('hashtags')
    resetStyles()
    document.getElementById('hashtags-tab').style.background = '#ffffff11'
  })
  document.getElementById('video-length-tab').addEventListener('click', () => {
    displayTab('video-length')
    resetStyles()
    document.getElementById('video-length-tab').style.background = '#ffffff11'
  })
  document.getElementById('songs-tab').addEventListener('click', () => {
    displayTab('songs')
    resetStyles()
    document.getElementById('songs-tab').style.background = '#ffffff11'
  })
  document.getElementById('video-posting-tab').addEventListener('click', () => {
    displayTab('video-posting')
    resetStyles()
    document.getElementById('video-posting-tab').style.background = '#ffffff11'
  })

  /**
   * Displays the tab with the corresponding id
   *
   * @param {*} id The id of the tab to display
   */
  function displayTab (id) {
    Array.from(tabContents).forEach(tab => {
      tab.style.display = 'none'
    })

    document.getElementById(id).style.display = 'block'
    window.dispatchEvent(new Event('resize'))
  }

  function resetStyles () {
    document.getElementById('overview-tab').style.background = ''
    document.getElementById('hashtags-tab').style.background = ''
    document.getElementById('video-length-tab').style.background = ''
    document.getElementById('songs-tab').style.background = ''
    document.getElementById('video-posting-tab').style.background = ''
  }
})(d3)
