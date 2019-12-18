<?php
/**
 * Render the block front-end.
 */

function PLUGIN_render( $attributes, $content ) {
  return PLUGIN_construct_block( $attributes );
}


// [HELPER] Function to construct the HTML for the overall block.
function PLUGIN_construct_block( $attributes ) {
  $html = '<div>';

  // Add the data, if it exists.
  if ( $attributes['data'] ) {
    $html .= '<p>' . $attributes['data'] . '</p>';
  }

  $html .= '</div>';

  return $html;
}
