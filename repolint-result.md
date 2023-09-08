# Repolinter Report

*This report was generated automatically by the Repolinter.*

This Repolinter run generated the following results:
| ❗  Error | ❌  Fail | ⚠️  Warn | ✅  Pass | Ignored | Total |
|---|---|---|---|---|---|
| 0 | 10 | 1 | 4 | 10 | 25 |

- [Fail](#user-content-fail)
  - [❌ `license-file-exists`](#user-content--license-file-exists)
  - [❌ `contributing-file-exists`](#user-content--contributing-file-exists)
  - [❌ `code-of-conduct-file-exists`](#user-content--code-of-conduct-file-exists)
  - [❌ `changelog-file-exists`](#user-content--changelog-file-exists)
  - [❌ `security-file-exists`](#user-content--security-file-exists)
  - [❌ `support-file-exists`](#user-content--support-file-exists)
  - [❌ `readme-references-license`](#user-content--readme-references-license)
  - [❌ `integrates-with-ci`](#user-content--integrates-with-ci)
  - [❌ `github-issue-template-exists`](#user-content--github-issue-template-exists)
  - [❌ `github-pull-request-template-exists`](#user-content--github-pull-request-template-exists)
- [Warning](#user-content-warning)
  - [⚠️ `source-license-headers-exist`](#user-content--source-license-headers-exist)
- [Passed](#user-content-passed)
  - [✅ `readme-file-exists`](#user-content--readme-file-exists)
  - [✅ `binaries-not-present`](#user-content--binaries-not-present)
  - [✅ `test-directory-exists`](#user-content--test-directory-exists)
  - [✅ `code-of-conduct-file-contains-email`](#user-content--code-of-conduct-file-contains-email)
- [Ignored](#user-content-ignored)
  - [`javascript-package-metadata-exists`](#user-content-javascript-package-metadata-exists)
  - [`ruby-package-metadata-exists`](#user-content-ruby-package-metadata-exists)
  - [`java-package-metadata-exists`](#user-content-java-package-metadata-exists)
  - [`python-package-metadata-exists`](#user-content-python-package-metadata-exists)
  - [`objective-c-package-metadata-exists`](#user-content-objective-c-package-metadata-exists)
  - [`swift-package-metadata-exists`](#user-content-swift-package-metadata-exists)
  - [`erlang-package-metadata-exists`](#user-content-erlang-package-metadata-exists)
  - [`elixir-package-metadata-exists`](#user-content-elixir-package-metadata-exists)
  - [`license-detectable-by-licensee`](#user-content-license-detectable-by-licensee)
  - [`notice-file-exists`](#user-content-notice-file-exists)

## Fail <a href="#user-content-fail" id="fail">#</a>

### ❌ `license-file-exists` <a href="#user-content--license-file-exists" id="-license-file-exists">#</a>

Did not find a file matching the specified patterns. Below is a list of files or patterns that failed:

- `LICENSE*`
- `COPYING*`

### ❌ `contributing-file-exists` <a href="#user-content--contributing-file-exists" id="-contributing-file-exists">#</a>

Did not find a file matching the specified patterns. (`{docs/,.github/,}CONTRIB*`).

### ❌ `code-of-conduct-file-exists` <a href="#user-content--code-of-conduct-file-exists" id="-code-of-conduct-file-exists">#</a>

Did not find a file matching the specified patterns. Below is a list of files or patterns that failed:

- `{docs/,.github/,}CODEOFCONDUCT*`
- `{docs/,.github/,}CODE-OF-CONDUCT*`
- `{docs/,.github/,}CODE_OF_CONDUCT*`

### ❌ `changelog-file-exists` <a href="#user-content--changelog-file-exists" id="-changelog-file-exists">#</a>

Did not find a file matching the specified patterns. (`CHANGELOG*`).

### ❌ `security-file-exists` <a href="#user-content--security-file-exists" id="-security-file-exists">#</a>

Did not find a file matching the specified patterns. (`{docs/,.github/,}SECURITY.md`).

### ❌ `support-file-exists` <a href="#user-content--support-file-exists" id="-support-file-exists">#</a>

Did not find a file matching the specified patterns. (`{docs/,.github/,}SUPPORT*`).

### ❌ `readme-references-license` <a href="#user-content--readme-references-license" id="-readme-references-license">#</a>

Doesn't contain license (`README.md`).

### ❌ `integrates-with-ci` <a href="#user-content--integrates-with-ci" id="-integrates-with-ci">#</a>

Did not find a file matching the specified patterns. Below is a list of files or patterns that failed:

- `.gitlab-ci.yml`
- `.travis.yml`
- `appveyor.yml`
- `.appveyor.yml`
- `circle.yml`
- `.circleci/config.yml`
- `Jenkinsfile`
- `.drone.yml`
- `.github/workflows/*`
- `azure-pipelines.yml`

### ❌ `github-issue-template-exists` <a href="#user-content--github-issue-template-exists" id="-github-issue-template-exists">#</a>

Did not find a file matching the specified patterns. Below is a list of files or patterns that failed:

- `ISSUE_TEMPLATE*`
- `.github/ISSUE_TEMPLATE*`

### ❌ `github-pull-request-template-exists` <a href="#user-content--github-pull-request-template-exists" id="-github-pull-request-template-exists">#</a>

Did not find a file matching the specified patterns. Below is a list of files or patterns that failed:

- `PULL_REQUEST_TEMPLATE*`
- `.github/PULL_REQUEST_TEMPLATE*`


## Warning <a href="#user-content-warning" id="warning">#</a>

<details>
<summary>Click to see rules</summary>

### ⚠️ `source-license-headers-exist` <a href="#user-content--source-license-headers-exist" id="-source-license-headers-exist">#</a>

The first 5 lines do not contain the pattern(s): Copyright, License (`jest.config.js`).

</details>

## Passed <a href="#user-content-passed" id="passed">#</a>

<details>
<summary>Click to see rules</summary>

### ✅ `readme-file-exists` <a href="#user-content--readme-file-exists" id="-readme-file-exists">#</a>

Found file (`README.md`).

### ✅ `binaries-not-present` <a href="#user-content--binaries-not-present" id="-binaries-not-present">#</a>

Excluded file type doesn't exist. (`**/*.exe,**/*.dll,!node_modules/**`).

### ✅ `test-directory-exists` <a href="#user-content--test-directory-exists" id="-test-directory-exists">#</a>

Found file (`test`).

### ✅ `code-of-conduct-file-contains-email` <a href="#user-content--code-of-conduct-file-contains-email" id="-code-of-conduct-file-contains-email">#</a>

Did not find file matching the specified patterns. Below is a list of files or patterns that failed:

- `CODEOFCONDUCT*`
- `CODE-OF-CONDUCT*`
- `CODE_OF_CONDUCT*`
- `.github/CODEOFCONDUCT*`
- `.github/CODE-OF-CONDUCT*`
- `.github/CODE_OF_CONDUCT*`

</details>

## Ignored <a href="#user-content-ignored" id="ignored">#</a>

<details>
<summary>Click to see rules</summary>

### `javascript-package-metadata-exists` <a href="#user-content-javascript-package-metadata-exists" id="javascript-package-metadata-exists">#</a>

This rule was ignored for the following reason: ignored due to unsatisfied condition(s): "language=javascript"

### `ruby-package-metadata-exists` <a href="#user-content-ruby-package-metadata-exists" id="ruby-package-metadata-exists">#</a>

This rule was ignored for the following reason: ignored due to unsatisfied condition(s): "language=ruby"

### `java-package-metadata-exists` <a href="#user-content-java-package-metadata-exists" id="java-package-metadata-exists">#</a>

This rule was ignored for the following reason: ignored due to unsatisfied condition(s): "language=java"

### `python-package-metadata-exists` <a href="#user-content-python-package-metadata-exists" id="python-package-metadata-exists">#</a>

This rule was ignored for the following reason: ignored due to unsatisfied condition(s): "language=python"

### `objective-c-package-metadata-exists` <a href="#user-content-objective-c-package-metadata-exists" id="objective-c-package-metadata-exists">#</a>

This rule was ignored for the following reason: ignored due to unsatisfied condition(s): "language=objective-c"

### `swift-package-metadata-exists` <a href="#user-content-swift-package-metadata-exists" id="swift-package-metadata-exists">#</a>

This rule was ignored for the following reason: ignored due to unsatisfied condition(s): "language=swift"

### `erlang-package-metadata-exists` <a href="#user-content-erlang-package-metadata-exists" id="erlang-package-metadata-exists">#</a>

This rule was ignored for the following reason: ignored due to unsatisfied condition(s): "language=erlang"

### `elixir-package-metadata-exists` <a href="#user-content-elixir-package-metadata-exists" id="elixir-package-metadata-exists">#</a>

This rule was ignored for the following reason: ignored due to unsatisfied condition(s): "language=elixir"

### `license-detectable-by-licensee` <a href="#user-content-license-detectable-by-licensee" id="license-detectable-by-licensee">#</a>

This rule was ignored for the following reason: ignored because level is "off"

### `notice-file-exists` <a href="#user-content-notice-file-exists" id="notice-file-exists">#</a>

This rule was ignored for the following reason: ignored due to unsatisfied condition(s): "license=Apache-2.0"

</details>

