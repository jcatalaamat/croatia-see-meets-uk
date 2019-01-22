import React from 'react';
import RedHeader from './RedHeader';

const BoardOfDirectors = () => (
  <div className="board-directors">
    <div className="content">
      <RedHeader spacing text="Board of Directors" />
      <div className="">
        <div className="history">
          <div className="history-one">
            <p>
            Established in 1998, the BCCC is a long-standing friend of
British and Croatian businesses alike. With members from
a wide range of sectors and industries we have hosted
high-level Croatian officials on their first visits to the UK
and introduced, via our extensive network, business
contacts that have opened UK doors for many Croatian
companies. We have also assisted British businesses into
the Croatian market with its opportunities and
ever-increasing potential as a gateway to the region.

            </p>
            <p>
            As British-Croatian business relations have evolved, so
has our focus. Both British and Croatian businesses are
continually seeking every possible opportunity for growth
and cross-border expansion. Croatia will soon be entering
the Eurozone; it is also the first westward EU port of call
for all the Western Balkans countries lining up for EU
membership. On the other hand Britain is an under-utilised
market for Croatian business. If you are just starting up,
the BCCC is the place to pitch your project. If you are
growing, it’s a network that will multiply your efforts.

            </p>

          </div>
          <div className="history-two">
            <p>
            Against this backdrop we seek to employ our
well-established methods, contacts and knowledge to
maximise and develop British-Croatian business
opportunities.

            </p>
            <p>
            A number of other organisations with similar missions are
our fellow-travellers. Joining forces with our friends is more
important than ever, for which reason we invite all those
with Croatian and British interests at heart to reach out to
us to collaborate and engage in joint events and activities.

            </p>
            <div className="our-history__container--square">
              <div className="box-red">
                <h3 className="box-red__header">Join us</h3>
                <div className="box-red__text-container">
                  <span className="box-red__text">
                  BCCC membership is open to all businesses and
individuals, ranging from start-ups to high-profile,
established companies who are actively interested in
doing business between Croatia and the UK.
                    <br />
                    <br />
For more information or to join BCCC, contact us here:
                    <br />
                    <br />
                    <a style={{ textDecorationColor: '#e93732' }} href="mailto:info@britishcroatiancc.co.uk"><span className="p-contrast-red">info@britishcroatiancc.co.uk</span></a>
                    <br />
                    <br />
                    <a style={{ textDecorationColor: '#e93732' }} href="mailto:embers@britishcroatiancc.co.uk"><span className="p-contrast-red">embers@britishcroatiancc.co.uk</span></a>
                  </span>
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>

    </div>
  </div>
);

export default BoardOfDirectors;
