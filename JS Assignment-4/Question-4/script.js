document.addEventListener('DOMContentLoaded', function() {
    updateFontProperties();
    
   
    document.getElementById('colorchange').addEventListener('click', function() {
        var colorValue = document.getElementById('colorbox').value;
        document.getElementById('text-container').style.color = colorValue;
        updateFontProperties();
    });
    
    document.getElementById('fontsize').addEventListener('input', function() {
        var fontSizeValue = this.value + 'px';
        document.getElementById('text-container').style.fontSize = fontSizeValue;
        updateFontProperties();
    });
    
    var italicButton = document.getElementById('italic');
    var underlineButton = document.getElementById('underline');
    var boldButton = document.getElementById('bold');
    
    italicButton.addEventListener('click', function() {
        toggleTextStyle('italic', italicButton);
    });
    
    underlineButton.addEventListener('click', function() {
        toggleTextStyle('underline', underlineButton);
    });
    
    boldButton.addEventListener('click', function() {
        toggleTextStyle('bold', boldButton);
    });

    document.getElementById('list').addEventListener('change', function() {
        var fontFamilyValue = this.value;
        document.getElementById('text-container').style.fontFamily = fontFamilyValue;
        updateFontProperties();
    });

    document.getElementById('getstyle').addEventListener('click', function() {
        var cssProperties = getCSSProperties();
        document.getElementById('css-props').textContent = cssProperties;
    });
});

// Function to toggle text styles (italic, underline, bold)
function toggleTextStyle(styleName, button) {
    var currentState = button.classList.contains('active');
    
    if (currentState) {
        button.classList.remove('active');
        document.getElementById('text-container').style.fontStyle = 'normal';
        document.getElementById('text-container').style.textDecoration = 'none';
        document.getElementById('text-container').style.fontWeight = 'normal';
    } else {
        button.classList.add('active');
        if (styleName === 'italic') {
            document.getElementById('text-container').style.fontStyle = 'italic';
        } else if (styleName === 'underline') {
            document.getElementById('text-container').style.textDecoration = 'underline';
        } else if (styleName === 'bold') {
            document.getElementById('text-container').style.fontWeight = 'bold';
        }
    }
    updateFontProperties();
}

function updateFontProperties() {
    var computedStyle = window.getComputedStyle(document.getElementById('text-container'));
    var fontSize = computedStyle.getPropertyValue('font-size');
    var fontFamily = computedStyle.getPropertyValue('font-family');
    var color = computedStyle.getPropertyValue('color');
    var fontStyle = computedStyle.getPropertyValue('font-style');
    var textDecoration = computedStyle.getPropertyValue('text-decoration');
    var fontWeight = computedStyle.getPropertyValue('font-weight');
    
    var cssProperties = `font-size: ${fontSize}, font-family: ${fontFamily}, color: ${color}, font-style: ${fontStyle}, font-weight: ${fontWeight}, text-decoration: ${textDecoration}`;
    
    document.getElementById('css-props').textContent = cssProperties;
}

function getCSSProperties() {
    var computedStyle = window.getComputedStyle(document.getElementById('text-container'));
    var cssProperties = '';
    
    for (var prop in computedStyle) {
        if (computedStyle.hasOwnProperty(prop)) {
            cssProperties += `${prop}: ${computedStyle[prop]}; `;
        }
    }
    
    return cssProperties;
}
