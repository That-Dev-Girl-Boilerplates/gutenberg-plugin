/**
 * BLOCK: My Block
 */

import MyBlockEdit from './edit.js';
import MyBlockIcons from './icons.js';

const MyBlock = ( () => {

  const { registerBlockType } = wp.blocks;

  registerBlockType( 'tdg/my-block', {
    title: 'BLOCK NAME',
    description: '',
    category: 'common',
    icon: MyBlockIcons.block,
    example: { attributes: {} }, // Show default example.
    edit: ( props ) => { return ( MyBlockEdit( props ) ); },
    save: () => { return null; }
  } );

} )();

export default MyBlock;
