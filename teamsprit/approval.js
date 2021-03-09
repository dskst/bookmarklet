javascript:(
    function() {
        var arrow_interval_id = setInterval(function() {
            // click arrow
            var arrow = document.querySelector('.rowActionsPlaceHolder.slds-button.slds-button--icon-x-small.slds-button--icon-border-filled.keyboardMode--trigger');
            if (arrow) {
                arrow.click();

                // click approval dropdown
                var dropdown_interval_id = setInterval(function() {
                    var dropdown = document.querySelector('.forceActionLink');
                    if (dropdown) {
                        dropdown.click();
                        clearInterval(dropdown_interval_id); 

                        // click approval modal
                        var modal_interval_id = setInterval(function() {
                            var modal = document.querySelector('.slds-button.slds-button--neutral.modal-button-left.actionButton.uiButton--default.uiButton--brand.uiButton'); 
                            if (modal) {
                                modal.click();
                                clearInterval(modal_interval_id);
                            }
                        }, 1000);
                    }
                }, 500);
            } else {
                clearInterval(arrow_interval_id);
            }
        }, 3000);
    }
)();