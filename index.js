$(document).ready(function() {
    // Add settings to the extension menu
    addSettings();

    // Retrieve the stored setting and update the checkbox
    const storedSetting = localStorage.getItem('disablePopoutTrigger');
    const isDisabled = storedSetting === 'true';
    $('#disable_popout_trigger').prop('checked', isDisabled);

    // Apply the initial CSS change
    togglePopoutTrigger(isDisabled);

    // Event listener for changes in the checkbox
    $('#disable_popout_trigger').change(function() {
        const isChecked = this.checked;
        togglePopoutTrigger(isChecked);
        // Store the setting in localStorage
        localStorage.setItem('disablePopoutTrigger', isChecked);
    });

    // Set an interval to continuously check and apply the CSS change
    setInterval(() => {
        const currentSetting = $('#disable_popout_trigger').is(':checked');
        togglePopoutTrigger(currentSetting);
    }, 1000); // checks every 1 second
});

function togglePopoutTrigger(isDisabled) {
    // Toggle CSS directly
    if (isDisabled) {
        $('#qr--popoutTrigger').css('display', 'none');
    } else {
        $('#qr--popoutTrigger').css('display', 'block');
    }
}

function addSettings() {
    const settingsHtml = `
        <div class="extension-settings">
            <div class="inline-drawer">
                <div class="inline-drawer-toggle inline-drawer-header">
                    <b>Extension Settings</b>
                    <div class="inline-drawer-icon fa-solid fa-circle-chevron-down down"></div>
                </div>
                <div class="inline-drawer-content">
                    <div>
                        <label for="disable_popout_trigger">Disable Popout Trigger</label>
                        <input type="checkbox" id="disable_popout_trigger">
                    </div>
                </div>
            </div>
        </div>
    `;
    $('#extensions_settings').append(settingsHtml);
}
