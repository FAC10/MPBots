function constructCandidates(candidates, senderID, intent, callback, callback2) {
  const allCandidates = [];
  candidates.forEach((candidate) => {
    const name = candidate.name;
    const image = candidate.image_url;
    const party = candidate.party_name;
    let twitter = candidate.twitter_username;

    if (twitter === null) {
      twitter = 'noTwitter';
    }

    const candidateTemplate = {
      title: name,
      image_url: image,
      subtitle: party,
      buttons: [
        {
          type: 'postback',
          title: 'Recent tweets',
          payload: `Recent tweets ${twitter}`,
        }, {
          type: 'postback',
          title: 'Recent mentions',
          payload: `Recent mentions ${twitter}`,
        },
      ],
    };
    allCandidates.push(candidateTemplate);
  });
  const placeholderVotingObj = { party: null, issue: null, inFavour: null, against: null, turnout: null };
  callback(placeholderVotingObj, null, allCandidates, null, senderID, intent, callback2);
}

module.exports = constructCandidates;
