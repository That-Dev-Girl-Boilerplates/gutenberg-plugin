/**
 * EDIT: PLUGIN_TITLE
 */

const { PanelBody, TextControl } = wp.components;
const { InspectorControls } = wp.editor;
const { Fragment } = wp.element;

let PLUGINEdit = ( props ) => {
  // Get the values needed from props.
  const { isSelected, setAttributes } = props;
  const { data } = props.attributes;

  // Declare change event handlers.
  const onChangeData = ( value ) => { setAttributes( { data: value } ) };

  // Return the edit UI.
  return (
    <Fragment>
      { isSelected && (
        <InspectorControls>

          <PanelBody>
            <p>Something goes here.</p>
          </PanelBody>

        </InspectorControls>
      ) }

      <div>
        <TextControl
          label='Data'
          value={ data }
          onChange={ onChangeData }
        />
      </div>
    </Fragment>
  );
};

export default PLUGINEdit;
