# DatingAppProject

## Environment

- [.NET 8](<https://dotnet.microsoft.com/en-us/download/dotnet/thank-you/sdk-8.0.303-windows-x64-installer>)
- [NVM for Windows](<https://github.com/coreybutler/nvm-windows/releases>)
- Node.js
- VS Code
- [Postman](<https://www.postman.com/downloads/>)

### Node Version Manager

```shell
nvm --version
1.1.12

nvm list
  * 16.20.2 (Currently using 64-bit executable)
```

### Node Package Manager

```shell
C:\Users\kalen>npm version
{
  npm: '8.19.4',
  node: '16.20.2',
  v8: '9.4.146.26-node.26',
  uv: '1.43.0',
  zlib: '1.2.11',
  brotli: '1.0.9',
  ares: '1.19.1',
  modules: '93',
  nghttp2: '1.47.0',
  napi: '8',
  llhttp: '6.0.11',
  openssl: '1.1.1v+quic',
  cldr: '41.0',
  icu: '71.1',
  tz: '2022f',
  unicode: '14.0',
  ngtcp2: '0.8.1',
  nghttp3: '0.7.0'
}
```

### .NET

```shell
C:\Users\kalen>dotnet --info
.NET SDK:
 Version:           8.0.303
 Commit:            29ab8e3268
 Workload version:  8.0.300-manifests.f4912886
 MSBuild version:   17.10.4+10fbfbf2e

Runtime Environment:
 OS Name:     Windows
 OS Version:  10.0.22631
 OS Platform: Windows
 RID:         win-x64
 Base Path:   C:\Program Files\dotnet\sdk\8.0.303\

.NET workloads installed:
There are no installed workloads to display.

Host:
  Version:      8.0.7
  Architecture: x64
  Commit:       2aade6beb0

.NET SDKs installed:
  8.0.102 [C:\Program Files\dotnet\sdk]
  8.0.303 [C:\Program Files\dotnet\sdk]

.NET runtimes installed:
  Microsoft.AspNetCore.App 6.0.27 [C:\Program Files\dotnet\shared\Microsoft.AspNetCore.App]
  Microsoft.AspNetCore.App 7.0.16 [C:\Program Files\dotnet\shared\Microsoft.AspNetCore.App]
  Microsoft.AspNetCore.App 8.0.2 [C:\Program Files\dotnet\shared\Microsoft.AspNetCore.App]
  Microsoft.AspNetCore.App 8.0.7 [C:\Program Files\dotnet\shared\Microsoft.AspNetCore.App]
  Microsoft.NETCore.App 6.0.27 [C:\Program Files\dotnet\shared\Microsoft.NETCore.App]
  Microsoft.NETCore.App 7.0.16 [C:\Program Files\dotnet\shared\Microsoft.NETCore.App]
  Microsoft.NETCore.App 8.0.2 [C:\Program Files\dotnet\shared\Microsoft.NETCore.App]
  Microsoft.NETCore.App 8.0.7 [C:\Program Files\dotnet\shared\Microsoft.NETCore.App]
  Microsoft.WindowsDesktop.App 6.0.27 [C:\Program Files\dotnet\shared\Microsoft.WindowsDesktop.App]
  Microsoft.WindowsDesktop.App 7.0.16 [C:\Program Files\dotnet\shared\Microsoft.WindowsDesktop.App]
  Microsoft.WindowsDesktop.App 8.0.2 [C:\Program Files\dotnet\shared\Microsoft.WindowsDesktop.App]
  Microsoft.WindowsDesktop.App 8.0.7 [C:\Program Files\dotnet\shared\Microsoft.WindowsDesktop.App]

Other architectures found:
  x86   [C:\Program Files (x86)\dotnet]
    registered at [HKLM\SOFTWARE\dotnet\Setup\InstalledVersions\x86\InstallLocation]

Environment variables:
  Not set

global.json file:
  Not found

Learn more:
  https://aka.ms/dotnet/info

Download .NET:
  https://aka.ms/dotnet/download
```

## Setting up the Project

### Creating the Solution

```shell
mkdir DatingApp
cd DatingApp
dotnet new sln
```

### Create the Services API

```shell
dotnet new webapi -controllers -n Services
dotnet sln add Services
dotnet sln list
```

### To Run the API

```shell
cd ./Services
dotnet run
```

### To Trust Certificate / Webpage

```shell
cd ./Services
dotnet dev-certs https --clean
dotnet dev-certs https --trust
```

### Add Entity Framework

#### Install Nuget Packages (Version `8.0.7` - Major Version [8] Must match .NET major version)

- Microsoft.EntityFrameworkCore.Sqlite
- Microsoft.EntityFrameworkCore.Design

#### Install `dotnet ef` tool form [nuget.org](<nuget.org>)

```shell
dotnet tool install --global dotnet-ef --version 8.0.7
```

#### Create a Migration

```shell
dotnet ef migrations add InitialCreate -o Data/Migrations
```


