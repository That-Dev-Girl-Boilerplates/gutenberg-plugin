<?php

/**
 * My Block
 *
 * Registration and render functionality for My Block.
 */

namespace ThatDevGirl\Blocks;

class MyBlock {

  public function __construct() {
    add_action( 'init', [ $this, 'register' ] );
  }


  /**
   * register()
   *
   * @return void
   */
  public function register(): void {
    register_block_type( __DIR__, [
      'render_callback' => [ $this, 'render' ]
    ] );
  }


  /**
   * render()
   *
   * @param array $attributes
   * @return string
   */
  public function render( $attributes ): string {
    // Get individual attributes, for reading ease.
    $content = $attributes['content'];

    // Construct the block's HTML.
    $html = sprintf( '<p>%1$s</p>', $content );

    return $html;
  }

}

new MyBlock;
