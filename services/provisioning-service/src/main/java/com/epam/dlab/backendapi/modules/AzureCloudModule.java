/*
 * Copyright (c) 2017, EPAM SYSTEMS INC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

package com.epam.dlab.backendapi.modules;

import com.epam.dlab.backendapi.resources.azure.EdgeResourceAzure;
import com.epam.dlab.backendapi.resources.azure.InfrastructureResourceAzure;
import com.epam.dlab.cloud.CloudModule;
import com.google.inject.Injector;
import io.dropwizard.jersey.setup.JerseyEnvironment;

public class AzureCloudModule extends CloudModule {
    public AzureCloudModule(JerseyEnvironment jerseyEnvironment, Injector injector) {
        super(jerseyEnvironment, injector);
        jerseyEnvironment.register(injector.getInstance(EdgeResourceAzure.class));
        jerseyEnvironment.register(injector.getInstance(InfrastructureResourceAzure.class));
    }
}
