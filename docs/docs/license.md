title: Jspreadsheet License
keywords: Jspreadsheet, javascript, plugins, spreadsheet, custom formulas, javascript formulas, Excel-like formulas, spreadsheet-like formulas, cross spreadsheet calculations, multi-sheet calculations, data calculations across sheets
description: Learn more about the Jspreadsheet License, which is necessary for running Jspreadsheet Pro or any of its extensions across various environments.

# Jspreadsheet License

Jspreadsheet Pro and extensions require a license. A single license certificate contains all necessary information about your plan, including your name, expiration date, authorized domains and extensions. You can use the same certificate across different environments, which must be declared using the method `jspreadsheet.setLicense(string)`. This section provides more information about the license, distribution, and best practices.

## Certificate

A Jspreadsheet license certificate is a self-signed string that users can generate through the website or API.

- Certificates via the API are only available for Enterprise or Ultimate subscription plans and are not offered for one-time purchases.
- Certificates are valid for 12 months for active accounts and 100 years for one-time-fee clients.
- A demo account can generate a certificate valid for 30 days;
- Generating a new certificate does not invalidate any previous certificates. Therefore, all certificates remain valid until their expiration dates.
- During the subscription period, the developer must update the license certificate annually.


{.green}
> We recommend that licenses are not hard-coded to facilitate updating the certificate without requiring a new deployment.


### Authorized Domains

Each Jspreadsheet certificate explicitly lists the domains where the license is valid. Domains must be registered without either 'http' or 'www' prefixes or port numbers. The system treats these domains as wildcards, allowing the application to operate across all associated subdomains.

### Certificate Scope

The scope of a Jspreadsheet certificate is encoded directly within it at the time of generation. This scope determines which version of Jspreadsheet you can use, as well as which specific extensions are enabled for your profile.

### Demo Certificate

A demo certificate brings to the developer all Premium Features, including all extensions automatically and it will be valid for 30 days.

## Validation

### Overview

Jspreadsheet prioritizes privacy by ensuring that all certificate validations are conducted offline. There is no need for online remote verification, allowing Jspreadsheet to operate entirely without any internet connection.

### Manual Validation

You can check the information and validate a certificate using our online tool.

https://jspreadsheet.com/me/validate


## Renew a Certificate

You can renew your certificate at any time. Upon issuance of a new certificate, all previously issued certificates will remain valid until their expiration dates. To generate a new certificate, ensure you have an active subscription or that professional support is included in your one-time plans.

[Go to my account](https://jspreadsheet.com/me/profile)

