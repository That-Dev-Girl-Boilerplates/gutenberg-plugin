<?php
/**
 * Register the block.
 */

require_once( 'render-block.inc.php' );

function PLUGIN_register() {
  register_block_type( 'tdg/PLUGIN', array(
    // Set up block attributes.
    'attributes' => array(
      'data'    => array( 'type' => 'string', 'default' => '' )
    ),

    // Declare render callback function.
    'render_callback' => 'PLUGIN_render'
  ) );
}

// HOOK for block registration.
add_action( 'init', 'PLUGIN_register' );
