peopleapi code
Person profile = peopleService.people().get("people/account_id")
   .setPersonFields("names,emailAddresses")
   .execute();

   Person contactToCreate = new Person();
List<Name> names = new ArrayList<>();
names.add(new Name().setGivenName("John").setFamilyName("Doe"));
contactToCreate.setNames(names);

Person createdContact = peopleService.people().createContact(contactToCreate).execute();

List<String> sources = new ArrayList<>();
sources.add("DIRECTORY_SOURCE_TYPE_DOMAIN_CONTACT");
sources.add("DIRECTORY_SOURCE_TYPE_DOMAIN_PROFILE");

ListDirectoryPeopleResponse response = peopleService.people().listDirectoryPeople()
  .setSources(sources)
   .setReadMask("metadata,names,emailAddresses")
   .execute();

List<Person> people = response.getPeople();

//emailaddress notification after click

//function email() {
//  alert(
//   `Please contact me at: Samantha.Kenyon@beautifulbrilliant.com, alternatively you can contact us on facebook here: "https://www.facebook.com/alwaysbeBB" `
// );
//}

//let contact = document.querySelector('#contact');

//contact.addEventListener('click', email);
