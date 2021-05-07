# Project Overview

## Project Name

Graze.

## Project Description

Graze is an application where users can post about their favorite dishes at restaurants. Users can read through previous reviews and "thumbs up" or "thumbs down" reviews with too many "thumbs down will be deleted. 

## Wireframes

<iframe style="border:none" width="800" height="450" src="https://whimsical.com/embed/E1wJ4oBmiHPY2TMSa18xLK"></iframe>gi

## Component Hierarchy
https://whimsical.com/27c8GrTFa47EzbQsf7Mjy1

## API and Data Sample

```json
EXAMPLE RESPONSE
{
    "records": [
        {
            "id": "recjh8F0VXLt9sIT1",
            "fields": {
                "Restaurant": "Satay",
                "Location": "Hoboken",
                "favorite dishes": "Ayam Kelapa",
                "review": "Excellent food, great service. Closed on Wednesdays"
            },
            "createdTime": "2021-05-07T01:04:59.000Z"
        },
        {
            "id": "recI18HoMsgTsKHKL",
            "fields": {
                "Restaurant": "Casa de Paco",
                "Location": "Newark",
                "favorite dishes": "Octopus",
                "review": "Great food, nice place to go out to "
            },
            "createdTime": "2021-05-07T01:04:59.000Z"
        },
        {
            "id": "rec392PWjY5dRIAws",
            "fields": {
                "Restaurant": "Roll n Roaster",
                "Location": "Brooklyn",
                "favorite dishes": "Roast Beef, Cheez fries",
                "review": "tasty fast food "
            },
            "createdTime": "2021-05-07T01:04:59.000Z"
        }
    ],
    "offset": "rec392PWjY5dRIAws"
}
```

### MVP/PostMVP


#### MVP 

- Utilize airtable 
- Render data on page 
- Allow user to make posts
- Allow users to like a post and keep track
- Remove posts with too many dislikes 


#### PostMVP  
*These are examples only. Replace with your own Post-MVP features.*

- Allow users to filter posts by location
-Incorporate outside API 

## Project Schedule

This schedule will be used to keep track of your progress throughout the week and align with our expectations. Here's an example.

|  Day | Deliverable | Status
|---|---| ---|
|May 6| Prompt / Wireframes / Priority Matrix / Timeframes | Incomplete
|May 7 | Project Approval | Incomplete
|July 10| Core Application Structure (HTML, CSS, etc.) | Incomplete
|July 11| Pseudocode / actual code | Incomplete
|July 12| Initial Clickable Model  | Incomplete
|July 13| MVP | Incomplete
|May 14| Presentations | Incomplete

## Timeframes

| Component | Priority | Estimated Time | Time Invested | Actual Time |
| --- | :---: |  :---: | :---: | :---: |
| Psuedo code | H | 5hrs|  |  |
| Working with API | H | 4hrs|  |  |
| debugging | H | 6hrs|   |  |
| Styling | H | 8hrs|  |  |
| Functionlity  | H | 10hrs|  |  |
| Total | H | 35hrs| hrs |  |

## SWOT Analysis

### Strengths:
I have a solid idea that I an confident I can implement to give the user a good experince. 

### Weaknesses:
Setting up a conditonal for the like and dislike buttons will be a bit tricky. 
### Opportunities:
Incorporating the like and dislike feature will give me a good opportunity to understand useState better and also give the user a better experience bu using conditions to format  

### Threats:
I tend to spend a lot of time debugging on projects like this. It always give me a good opportunity to learn when you break the code, but it can be very time consuming.