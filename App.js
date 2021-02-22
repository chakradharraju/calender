import React, {Component} from 'react';  
import {Platform, StyleSheet, Text, View} from 'react-native';
import {Calendar, CalendarList, Agenda} from 'react-native-calendars';  

type Props = {};
fetch('https://devapi.quinn.care/graph/', {
  method: 'POST'},
  {
  "requestobjects": [
    {
      "posts": {
        "operationtype": "read",        
        "id": {
          "return": true
        },
        "userid": {
            "searchvalues" : ["41329663-5834-11eb-8e6e-3ca82abc3dd4"],
          "return": true
        },
        "iscalendarentry": {
            "searchvalues" : ["true"],
          "return": true
        },
        "media": {
          "return": true
        },
        "rating": {
          "return": true
        },
        "text": {
          "return": true
        },
        "privacy": {
          "searchvalues": [
            18
          ],
          "return": true
        },
        "typeofday": {
          "return": true
        },

        // Don't change anything above ^^	
        //editable variables start below //

        "calendardatetime": { // Date Time of a particular post
          "return": true  , // please note: there can be multiple posts on a single day
          "sort" : "descending" // you can sort fetched dates by ascending/descending.
        },
        "maxitemcount": "20",   //you can ask between 1 to 50 posts (max) at a time.
        "continuationtoken": null //replace with the continuation token from response to get the next set
      }
    }
  ]
},
{
    "requesteruserid": null, // ignore this
    "requesterusername": null, // ignore this
    "responseobjects": [
        {
            "posts": [
                {
                	// this is the unique post identifier
                    "id": "0d865818-a8ee-4151-9093-96c0a97aa63d",

                    "userid": "6c007289-518a-11eb-a487-3ca82abc3dd4", // ignore this
                    "iscalendarentry": true, // ignore this

                    // here's the date time.
                    "calendardatetime": "2020-12-04T07:00:00",

                    // you could use this ImageUrl 
                    // In case of multiple images, use the first one from the array 
                    "media": [
                        {
														"mediatype" : 31,
                            "mediaurl": "https://ik.imagekit.io/bj96n986jb/dev/Screenshot_2020-12-05_at_12.00.43_AM_3XTnZB8Hr.png", //image url to be displayed
                            "updatedontimestamp": "2020-08-09T21:37:54.5535126Z"
                        }
                    ],
                    // Rating is the star rating - from 1 to 5
                    "rating": 5,

                    // Description for the expanded view
                    "text": "Hi, I'm Kevin Parker, and I run Tame Impala. Some of our good songs that you could check out would be The less I know the better, Let it happen, New person - same old mistake, Guilty conscience, Love/Paranoia, etc. ",

                    "privacy": 18,  // ignore this

                    // TypeOfDay is an array of legend properties. Can vary from 0-5 properties.
					// Legend codes to show in tiles are given at the bottom.
                    "typeofday": [
                        "protein treatment",
                        "deep conditioning"
                    ],
                    "updatedontimestamp": "2020-12-04T18:31:47.261956"	// ignore this
                },
            ],
            // You could pass along the ContinuationToken below in your next request to fetch subsequent posts. 
            "continuationtoken": {
                "sorton": "calendardatetime",
                "token": "07-09-2020 07:00:00"
            }
        }
    ]
}        
);    
export default class App extends Component<props> {  
  render() { 
    return (  
      <View>  
        <CalendarList
          // Callback which gets executed when visible months change in scroll view. Default = undefined
          onVisibleMonthsChange={
            (months) => {console.log('now these months are visible', months);}
            }
          // Max amount of months allowed to scroll to the past. Default = 50
          pastScrollRange={50}
          // Max amount of months allowed to scroll to the future. Default = 50
          futureScrollRange={50}
          // Enable or disable scrolling of calendar list
          scrollEnabled={true}
          // Enable or disable vertical scroll indicator. Default = false
          showScrollIndicator={true}
      />

      </View>  
    );  
  }
}  