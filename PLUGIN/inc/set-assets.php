<?php

/**
 * Add Javascript and CSS assets to the admin.
 */

class PLUGINAssets {
  const JS = '../build/scripts.min.js';


  /**
   * __construct()
   */
  public function __construct() {
    add_action( 'enqueue_block_editor_assets', [ $this, 'enqueue' ] );
  }


  /**
   * enqueue()
   *
   * Add Javascript to the post editor.
   *
   * @return void
   */
  public function enqueue(): void {
    wp_enqueue_script(
      'PLUGIN-editor-blocks',
      plugins_url( self::JS, __FILE__ ),
      [ 'wp-blocks', 'wp-editor', 'wp-components' ],
      filemtime( plugin_dir_path( __FILE__ ) . self::JS )
    );
  }

}

if ( is_admin() ) {
  new PLUGINAssets();
}
