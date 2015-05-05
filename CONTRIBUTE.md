Great to have you here! This document outlines the contribution guidelines for
this project. By participating in this project, you agree to abide by
our [code of conduct].

[code of conduct]: CODE_OF_CONDUCT.md

## Getting Started

Fork, then clone the repo:

    git clone git@github.com:your-username/bill_tracker.git

Switch to the gh-pages branch of the repository:

    git checkout gh-pages

Install Jasmine for testing. In ruby:

    gem install jasmine

Make sure that all tests pass before you start working.

Make your change. Add tests for your change. Make the tests pass.

Push to your fork and [submit a pull request][pr].

[pr]: https://github.com/troy-open-data/bill_tracker/compare/gh-pages

At this point you're waiting on us. We may suggest some changes or improvements
or alternatives.

Some things that will increase the chance that your pull request is accepted:

* Write tests.
* Use a consistent and reasonable style.
* Write a [good commit message][commit].

[commit]: http://tbaggery.com/2008/04/19/a-note-about-git-commit-messages.html

## Testing

This project uses [Jasmine][jasmine] for testing. Every change that involves the
project JavaScript should be tested.

[jasmine]: http://jasmine.github.io/

There are several ways to install Jasmine. This will get you running in ruby, but
check the [website][jasmine-website] for more alternatives.

[jasmine-website]: http://jasmine.github.io

Install Jasmine:

    gem install jasmine

Start the testing server.  

    rake jasmine

Point your browser to http://localhost:8888. To re-run tests, refresh your
browser page.
