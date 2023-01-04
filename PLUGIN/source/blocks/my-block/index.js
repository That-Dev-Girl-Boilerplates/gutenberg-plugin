/**
 * BLOCK: My Block
 */

import { default as Edit } from './edit.js';
import { default as Icons } from './icons.js';
import { default as Metadata } from './block.json';

const MyBlock = ( () => {

  const { registerBlockType } = wp.blocks;

  registerBlockType( Metadata, {
    icon: Icons.block,
    edit: ( props ) => { return ( Edit( props ) ); },
    save: () => { return null; }
  } );

} )();

export default MyBlock;
