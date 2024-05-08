# Lab 5 - Starter
Ulises Salinas

Brandon Luu

https://ulises0516.github.io/Lab5_Starter/expose.html


Check for understanding:

1.) The “message” feature, which encompasses the functionality of writing and sending a message to another user, involves multiple components of the application working together This complexity makes it better suited for integration or end-to-end testing rather than unit testing.

2.)  There are virtually no reasons against using unit tests for this feature, as long as it remains a self-contained unit of functionality. If, however, the feature interacts with other components or systems (like dynamically setting the limit based on user settings stored elsewhere), then those interactions might be better tested with integration tests.