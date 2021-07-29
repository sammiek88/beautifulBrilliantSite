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
  getItem: (key) => {
    const cookies = document.cookie
      .split(';')
      .map((cookie) => cookie.split('='))
      .reduce((acc, [key, value]) => ({ ...acc, [key.trim()]: value }), {});
    return cookies[key];
  },
  setItem: (key, value) => {
    document.cookie = `${key}=${value}`;
  },
};

const storageType = cookieStorage;
const consentPropertyName = 'BB_consent';

const shouldShowPopUp = () => !storageType.getItem(consentPropertyName);
const saveToStorage = () => storageType.setItem(consentPropertyName, true);

window.onload = () => {
  const consentPopup = document.getElementById('consentpopup');
  const acceptBtn = document.getElementById('accept');

  const acceptFn = (event) => {
    saveToStorage(storageType);
    consentPopup.classList.add('hidden');
  };
  acceptBtn.addEventListener('click'.acceptFn);

  if (shouldShowPopUp(storageType)) {
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
