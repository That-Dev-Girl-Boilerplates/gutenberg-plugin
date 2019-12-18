/**
 * BLOCK: PLUGIN_TITLE
 */

import PLUGINIcons from './icons.js';
import PLUGINEdit from './edit.js';

( function() {

  const { registerBlockType } = wp.blocks;

  registerBlockType( 'tdg/PLUGIN', {
    title: 'PLUGIN_TITLE',
    description: 'Description goes here.',
    category: 'common',
    icon: PLUGINIcons.block,
    edit: PLUGINEdit,
    save: () => { return null; }
  } );

} )();
