interface Request {
  uri: string
}

interface Event {
  request: Request
}

// eslint-disable-next-line unused-imports/no-unused-vars
async function handler(event: Event): Promise<Request> {
  const request = event.request
  const uri = request.uri

  // Check whether the URI is missing a file name.
  if (uri.endsWith('/')) {
    request.uri += 'index.html'
  }
  // Check whether the URI is missing a file extension.
  else if (!uri.includes('.')) {
    request.uri += '/index.html'
  }

  return request
}

// See https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/example-function-add-index.html
