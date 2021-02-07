import axios from 'axios'

export const getFixtures = async () => {
  const params = {
    token: "eFExWCgsmCX066dKSsJVmGu2HUYATekkGFcxbgnIfjPTtQ67JZrWjDnmwS3dn93p",
    fixtureId: "1234567"
  }
  const response = await axios.get(`http://dev.webuildbots.ai:9123/fixtures`, {params})

  console.log(response.data)
}

