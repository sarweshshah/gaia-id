# GAIA 
### Generative Design Identity patterns for ValueLabs Design Inspire Conference 2021

## Concept
The concept presented here is eponymous to GAIA (also pronounced Gaea /ˈdʒiːə), the mythical goddess of Earth, one of the elemental deities born at the dawn of creation. She represents the driving force that nurtures life through the interaction of both living and non-living beings. Based on these interpretations, we affirm that however unique, every entity on this planet is a manifestation of the same continuous process of regeneration and evolution with time. 

This essence was translated into the underlying concept of our artworks; random parameters that share the same visual elements and use participant profiles to generate a unique pattern for each participant of the Design Inspire 2021 Conference.

## Technical Info
Participant data from the registrations for the conference did not have any unique identifier except their email address. The email address is thus used as a string to be passed to the hash algorithm that generates a 5 digit number that is used as the seed number to generate random pattern. This ensures that the patterns are unique to an individual. The patterns are also coloured based on the persona of the individual: `#b16acf` for Design Professionals, `#37b5ac` for Researchers, `#e19121` for Students, `#29b85d` for Entrepreneurs, `#c93b3b` for Freelancers and `#E3C766` for Others.

The program instanciates the grid class that creates a decaying arc structure across its corners based on the persona of the individual and randomlly 'turns on/off' based on the hashcode for the individual. The code has been designed to generate the collaterals for the conference and renders front and back of an ID card, and a zoom banner, all of which are unique to the said individual. The functions in the `draw()` in `setup.js` file is modified to select which one has to rendered.

The code was originally designed to be embedded in the frontend stack and showcase the collaterals dynamically. Later it was replaced with the generated images of the participant. A commented section in the `draw()` functions triggered the script to dynamically travel through the participant database and download id marked images in appropriate folders to be used as site assets. The code also prepares a json file to facilitate searching the assets of a particular participant.

### Sample Gaia ID Card 
Front Side | Back Side
-- | --
![](https://github.com/sarweshshah/gaia-id/blob/main/sample/front.png) | ![](https://github.com/sarweshshah/gaia-id/blob/main/sample/back.png)
