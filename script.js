// peopleapi code
// Person profile = peopleService.people().get("people/account_id")
// .setPersonFields("names,emailAddresses")
// .execute();

// Person contactToCreate = new Person();
// List<Name> names = new ArrayList<>();
// names.add(new Name().setGivenName("John").setFamilyName("Doe"));
// contactToCreate.setNames(names);

// Person createdContact = peopleService.people().createContact(contactToCreate).execute();

// List<String> sources = new ArrayList<>();
// sources.add("DIRECTORY_SOURCE_TYPE_DOMAIN_CONTACT");
// sources.add("DIRECTORY_SOURCE_TYPE_DOMAIN_PROFILE");

// ListDirectoryPeopleResponse response = peopleService.people().listDirectoryPeople()
//   .setSources(sources)
// .setReadMask("metadata,names,emailAddresses")
// .execute();

// List<Person> people = response.getPeople();

//cookie consent banner//

const cookieStorage = {
  getItem: (item) => {
    const cookies = document.cookie
      .split(';')
      .map((cookie) => cookie.split('='))
      .reduce((acc, [key, value]) => ({ ...acc, [key.trim()]: value }), {});
    return cookies[item];
  },
  setItem: (item, value) => {
    document.cookie = `${item}=${value};`;
  },
};

const storageType = cookieStorage;
const consentPropertyName = 'jdc_consent';
const shouldShowPopup = () => !storageType.getItem(consentPropertyName);
const saveToStorage = () => storageType.setItem(consentPropertyName, true);

window.onload = () => {
  const acceptFn = (event) => {
    saveToStorage(storageType);
    consentPopup.classList.add('hidden');
  };
  const consentPopup = document.getElementById('consent-popup');
  const acceptBtn = document.getElementById('accept');
  acceptBtn.addEventListener('click', acceptFn);

  if (shouldShowPopup(storageType)) {
    setTimeout(() => {
      consentPopup.classList.remove('hidden');
    }, 2000);
  }
};

// twitter notification after click
function twitter() {
  alert(
    `Ooops! We don't have a twitter account yet! Watch this space however its in development! In the meantime you can find us on facebook here: "https://www.facebook.com/alwaysbeBB" `
  );
}

let contact = document.querySelector('#twitterbutton');

contact.addEventListener('click', twitter);
