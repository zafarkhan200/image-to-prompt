// Web version of common.js - without Chrome API dependencies

// Format date for display
function formatDate(dateString) {
  try {
    const date = new Date(dateString);
    return date.toLocaleDateString(undefined, { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  } catch (e) {
    return 'Unknown date';
  }
}

// Mock user data for web display
function getMockUserData() {
  return {
    isLoggedIn: false,
    userEmail: null,
    userName: null,
    isPremium: false,
    usageCount: 0,
    installDate: new Date().toISOString(),
    subscription: null
  };
}

// Get extension version
function getExtensionVersion() {
  return '1.0.0';
}

// Initialize the page with mock data
document.addEventListener('DOMContentLoaded', function() {
  // Update current year in footer if exists
  const yearElement = document.getElementById('current-year');
  if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
  }
  
  // Update version number if exists
  const versionElement = document.getElementById('extension-version');
  if (versionElement) {
    versionElement.textContent = getExtensionVersion();
  }
  
  // Hide user-specific elements that require Chrome API
  const userDataSections = document.querySelectorAll('.user-data-section');
  userDataSections.forEach(section => {
    if (section) {
      section.innerHTML = `
        <div class="web-notice">
          <p><strong>Note:</strong> You're viewing this page on the web. To see your personal data, please access this page from within the Chrome extension.</p>
          <a href="https://chrome.google.com/webstore/detail/your-extension-id" class="cta-button">Get the Extension</a>
        </div>
      `;
    }
  });
});// Web version of common.js - without Chrome API dependencies

// Format date for display
function formatDate(dateString) {
  try {
    const date = new Date(dateString);
    return date.toLocaleDateString(undefined, { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  } catch (e) {
    return 'Unknown date';
  }
}

// Mock user data for web display
function getMockUserData() {
  return {
    isLoggedIn: false,
    userEmail: null,
    userName: null,
    isPremium: false,
    usageCount: 0,
    installDate: new Date().toISOString(),
    subscription: null
  };
}

// Get extension version
function getExtensionVersion() {
  return '1.0.0';
}

// Initialize the page with mock data
document.addEventListener('DOMContentLoaded', function() {
  // Update current year in footer if exists
  const yearElement = document.getElementById('current-year');
  if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
  }
  
  // Update version number if exists
  const versionElement = document.getElementById('extension-version');
  if (versionElement) {
    versionElement.textContent = getExtensionVersion();
  }
  
  // Hide user-specific elements that require Chrome API
  const userDataSections = document.querySelectorAll('.user-data-section');
  userDataSections.forEach(section => {
    if (section) {
      section.innerHTML = `
        <div class="web-notice">
          <p><strong>Note:</strong> You're viewing this page on the web. To see your personal data, please access this page from within the Chrome extension.</p>
          <a href="https://chrome.google.com/webstore/detail/your-extension-id" class="cta-button">Get the Extension</a>
        </div>
      `;
    }
  });
});