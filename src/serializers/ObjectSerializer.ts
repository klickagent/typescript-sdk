'use strict';
import { AbstractAccountUpdate } from "../models/AbstractAccountUpdate";
import { AbstractApplicationUserUpdate } from "../models/AbstractApplicationUserUpdate";
import { AbstractDebtCollectionCaseUpdate } from "../models/AbstractDebtCollectionCaseUpdate";
import { AbstractHumanUserUpdate } from "../models/AbstractHumanUserUpdate";
import { AbstractPaymentLinkUpdate } from "../models/AbstractPaymentLinkUpdate";
import { AbstractRefundCommentActive } from "../models/AbstractRefundCommentActive";
import { AbstractSpaceUpdate } from "../models/AbstractSpaceUpdate";
import { AbstractSubscriberUpdate } from "../models/AbstractSubscriberUpdate";
import { AbstractSubscriptionAffiliateUpdate } from "../models/AbstractSubscriptionAffiliateUpdate";
import { AbstractSubscriptionMetricUpdate } from "../models/AbstractSubscriptionMetricUpdate";
import { AbstractSubscriptionProductActive } from "../models/AbstractSubscriptionProductActive";
import { AbstractTokenUpdate } from "../models/AbstractTokenUpdate";
import { AbstractTransactionCommentActive } from "../models/AbstractTransactionCommentActive";
import { AbstractTransactionInvoiceCommentActive } from "../models/AbstractTransactionInvoiceCommentActive";
import { AbstractTransactionPending } from "../models/AbstractTransactionPending";
import { AbstractWebhookListenerUpdate } from "../models/AbstractWebhookListenerUpdate";
import { AbstractWebhookUrlUpdate } from "../models/AbstractWebhookUrlUpdate";
import { Account } from "../models/Account";
import { AccountState } from "../models/AccountState";
import { AccountType } from "../models/AccountType";
import { Address } from "../models/Address";
import { AddressCreate } from "../models/AddressCreate";
import { ChargeAttemptEnvironment } from "../models/ChargeAttemptEnvironment";
import { ChargeAttemptState } from "../models/ChargeAttemptState";
import { ChargeFlow } from "../models/ChargeFlow";
import { ChargeFlowLevelConfiguration } from "../models/ChargeFlowLevelConfiguration";
import { ChargeFlowLevelConfigurationType } from "../models/ChargeFlowLevelConfigurationType";
import { ChargeFlowLevelState } from "../models/ChargeFlowLevelState";
import { ChargeState } from "../models/ChargeState";
import { ChargeType } from "../models/ChargeType";
import { ClientError } from "../models/ClientError";
import { ClientErrorType } from "../models/ClientErrorType";
import { CompletionLineItem } from "../models/CompletionLineItem";
import { CompletionLineItemCreate } from "../models/CompletionLineItemCreate";
import { Condition } from "../models/Condition";
import { ConditionType } from "../models/ConditionType";
import { ConnectorInvocationStage } from "../models/ConnectorInvocationStage";
import { CreationEntityState } from "../models/CreationEntityState";
import { CriteriaOperator } from "../models/CriteriaOperator";
import { CustomersPresence } from "../models/CustomersPresence";
import { DataCollectionType } from "../models/DataCollectionType";
import { DatabaseTranslatedString } from "../models/DatabaseTranslatedString";
import { DatabaseTranslatedStringCreate } from "../models/DatabaseTranslatedStringCreate";
import { DatabaseTranslatedStringItem } from "../models/DatabaseTranslatedStringItem";
import { DatabaseTranslatedStringItemCreate } from "../models/DatabaseTranslatedStringItemCreate";
import { DebtCollectionCase } from "../models/DebtCollectionCase";
import { DebtCollectionCaseDocument } from "../models/DebtCollectionCaseDocument";
import { DebtCollectionCaseSource } from "../models/DebtCollectionCaseSource";
import { DebtCollectionCaseState } from "../models/DebtCollectionCaseState";
import { DebtCollectionEnvironment } from "../models/DebtCollectionEnvironment";
import { DebtCollectionReceipt } from "../models/DebtCollectionReceipt";
import { DebtCollectionReceiptSource } from "../models/DebtCollectionReceiptSource";
import { DebtCollector } from "../models/DebtCollector";
import { DebtCollectorCondition } from "../models/DebtCollectorCondition";
import { DebtCollectorConditionType } from "../models/DebtCollectorConditionType";
import { DebtCollectorConfiguration } from "../models/DebtCollectorConfiguration";
import { DeliveryIndicationDecisionReason } from "../models/DeliveryIndicationDecisionReason";
import { DeliveryIndicationState } from "../models/DeliveryIndicationState";
import { DocumentTemplate } from "../models/DocumentTemplate";
import { DocumentTemplateType } from "../models/DocumentTemplateType";
import { DocumentTemplateTypeGroup } from "../models/DocumentTemplateTypeGroup";
import { EntityExportRequest } from "../models/EntityExportRequest";
import { EntityQuery } from "../models/EntityQuery";
import { EntityQueryFilter } from "../models/EntityQueryFilter";
import { EntityQueryFilterType } from "../models/EntityQueryFilterType";
import { EntityQueryOrderBy } from "../models/EntityQueryOrderBy";
import { EntityQueryOrderByType } from "../models/EntityQueryOrderByType";
import { Environment } from "../models/Environment";
import { FailureCategory } from "../models/FailureCategory";
import { FailureReason } from "../models/FailureReason";
import { Feature } from "../models/Feature";
import { Gender } from "../models/Gender";
import { HumanUser } from "../models/HumanUser";
import { InstallmentCalculatedPlan } from "../models/InstallmentCalculatedPlan";
import { InstallmentCalculatedSlice } from "../models/InstallmentCalculatedSlice";
import { InstallmentPayment } from "../models/InstallmentPayment";
import { InstallmentPaymentSliceState } from "../models/InstallmentPaymentSliceState";
import { InstallmentPaymentState } from "../models/InstallmentPaymentState";
import { InstallmentPlanConfiguration } from "../models/InstallmentPlanConfiguration";
import { InstallmentPlanSliceConfiguration } from "../models/InstallmentPlanSliceConfiguration";
import { Label } from "../models/Label";
import { LabelDescriptor } from "../models/LabelDescriptor";
import { LabelDescriptorCategory } from "../models/LabelDescriptorCategory";
import { LabelDescriptorGroup } from "../models/LabelDescriptorGroup";
import { LabelDescriptorType } from "../models/LabelDescriptorType";
import { LegalOrganizationForm } from "../models/LegalOrganizationForm";
import { LineItem } from "../models/LineItem";
import { LineItemAttribute } from "../models/LineItemAttribute";
import { LineItemAttributeCreate } from "../models/LineItemAttributeCreate";
import { LineItemCreate } from "../models/LineItemCreate";
import { LineItemReduction } from "../models/LineItemReduction";
import { LineItemReductionCreate } from "../models/LineItemReductionCreate";
import { LineItemType } from "../models/LineItemType";
import { LocalizedString } from "../models/LocalizedString";
import { ManualTask } from "../models/ManualTask";
import { ManualTaskAction } from "../models/ManualTaskAction";
import { ManualTaskActionStyle } from "../models/ManualTaskActionStyle";
import { ManualTaskState } from "../models/ManualTaskState";
import { ManualTaskType } from "../models/ManualTaskType";
import { MetricUsage } from "../models/MetricUsage";
import { OneClickPaymentMode } from "../models/OneClickPaymentMode";
import { PaymentConnector } from "../models/PaymentConnector";
import { PaymentConnectorConfiguration } from "../models/PaymentConnectorConfiguration";
import { PaymentConnectorFeature } from "../models/PaymentConnectorFeature";
import { PaymentContract } from "../models/PaymentContract";
import { PaymentContractState } from "../models/PaymentContractState";
import { PaymentContractType } from "../models/PaymentContractType";
import { PaymentLink } from "../models/PaymentLink";
import { PaymentLinkProtectionMode } from "../models/PaymentLinkProtectionMode";
import { PaymentLinkUpdate } from "../models/PaymentLinkUpdate";
import { PaymentMethod } from "../models/PaymentMethod";
import { PaymentMethodBrand } from "../models/PaymentMethodBrand";
import { PaymentMethodConfiguration } from "../models/PaymentMethodConfiguration";
import { PaymentPrimaryRiskTaker } from "../models/PaymentPrimaryRiskTaker";
import { PaymentProcessor } from "../models/PaymentProcessor";
import { PaymentProcessorConfiguration } from "../models/PaymentProcessorConfiguration";
import { Permission } from "../models/Permission";
import { PersistableCurrencyAmount } from "../models/PersistableCurrencyAmount";
import { PersistableCurrencyAmountUpdate } from "../models/PersistableCurrencyAmountUpdate";
import { ProductFeeType } from "../models/ProductFeeType";
import { ProductMeteredFee } from "../models/ProductMeteredFee";
import { ProductMeteredFeeUpdate } from "../models/ProductMeteredFeeUpdate";
import { ProductMeteredTierFee } from "../models/ProductMeteredTierFee";
import { ProductMeteredTierFeeUpdate } from "../models/ProductMeteredTierFeeUpdate";
import { ProductMeteredTierPricing } from "../models/ProductMeteredTierPricing";
import { ProductPeriodFee } from "../models/ProductPeriodFee";
import { ProductPeriodFeeUpdate } from "../models/ProductPeriodFeeUpdate";
import { ProductSetupFee } from "../models/ProductSetupFee";
import { ProductSetupFeeUpdate } from "../models/ProductSetupFeeUpdate";
import { Refund } from "../models/Refund";
import { RefundComment } from "../models/RefundComment";
import { RefundCreate } from "../models/RefundCreate";
import { RefundState } from "../models/RefundState";
import { RefundType } from "../models/RefundType";
import { RenderedDocument } from "../models/RenderedDocument";
import { ResourcePath } from "../models/ResourcePath";
import { ResourceState } from "../models/ResourceState";
import { RestAddressFormat } from "../models/RestAddressFormat";
import { RestAddressFormatField } from "../models/RestAddressFormatField";
import { RestCountry } from "../models/RestCountry";
import { RestCountryState } from "../models/RestCountryState";
import { RestCurrency } from "../models/RestCurrency";
import { RestLanguage } from "../models/RestLanguage";
import { Role } from "../models/Role";
import { Scope } from "../models/Scope";
import { ServerError } from "../models/ServerError";
import { Space } from "../models/Space";
import { SpaceAddress } from "../models/SpaceAddress";
import { SpaceAddressCreate } from "../models/SpaceAddressCreate";
import { SpaceReference } from "../models/SpaceReference";
import { SpaceReferenceState } from "../models/SpaceReferenceState";
import { SpaceView } from "../models/SpaceView";
import { StaticValue } from "../models/StaticValue";
import { Subscriber } from "../models/Subscriber";
import { SubscriberUpdate } from "../models/SubscriberUpdate";
import { Subscription } from "../models/Subscription";
import { SubscriptionAffiliate } from "../models/SubscriptionAffiliate";
import { SubscriptionAffiliateUpdate } from "../models/SubscriptionAffiliateUpdate";
import { SubscriptionChangeRequest } from "../models/SubscriptionChangeRequest";
import { SubscriptionCharge } from "../models/SubscriptionCharge";
import { SubscriptionChargeCreate } from "../models/SubscriptionChargeCreate";
import { SubscriptionChargeProcessingType } from "../models/SubscriptionChargeProcessingType";
import { SubscriptionChargeState } from "../models/SubscriptionChargeState";
import { SubscriptionChargeType } from "../models/SubscriptionChargeType";
import { SubscriptionCreateRequest } from "../models/SubscriptionCreateRequest";
import { SubscriptionLedgerEntry } from "../models/SubscriptionLedgerEntry";
import { SubscriptionLedgerEntryCreate } from "../models/SubscriptionLedgerEntryCreate";
import { SubscriptionLedgerEntryState } from "../models/SubscriptionLedgerEntryState";
import { SubscriptionMetric } from "../models/SubscriptionMetric";
import { SubscriptionMetricType } from "../models/SubscriptionMetricType";
import { SubscriptionMetricUpdate } from "../models/SubscriptionMetricUpdate";
import { SubscriptionMetricUsageReport } from "../models/SubscriptionMetricUsageReport";
import { SubscriptionMetricUsageReportCreate } from "../models/SubscriptionMetricUsageReportCreate";
import { SubscriptionPeriodBill } from "../models/SubscriptionPeriodBill";
import { SubscriptionPeriodBillState } from "../models/SubscriptionPeriodBillState";
import { SubscriptionProduct } from "../models/SubscriptionProduct";
import { SubscriptionProductComponent } from "../models/SubscriptionProductComponent";
import { SubscriptionProductComponentGroup } from "../models/SubscriptionProductComponentGroup";
import { SubscriptionProductComponentGroupUpdate } from "../models/SubscriptionProductComponentGroupUpdate";
import { SubscriptionProductComponentReference } from "../models/SubscriptionProductComponentReference";
import { SubscriptionProductComponentReferenceState } from "../models/SubscriptionProductComponentReferenceState";
import { SubscriptionProductComponentUpdate } from "../models/SubscriptionProductComponentUpdate";
import { SubscriptionProductRetirement } from "../models/SubscriptionProductRetirement";
import { SubscriptionProductRetirementCreate } from "../models/SubscriptionProductRetirementCreate";
import { SubscriptionProductState } from "../models/SubscriptionProductState";
import { SubscriptionProductVersion } from "../models/SubscriptionProductVersion";
import { SubscriptionProductVersionPending } from "../models/SubscriptionProductVersionPending";
import { SubscriptionProductVersionRetirement } from "../models/SubscriptionProductVersionRetirement";
import { SubscriptionProductVersionRetirementCreate } from "../models/SubscriptionProductVersionRetirementCreate";
import { SubscriptionProductVersionState } from "../models/SubscriptionProductVersionState";
import { SubscriptionState } from "../models/SubscriptionState";
import { SubscriptionSuspension } from "../models/SubscriptionSuspension";
import { SubscriptionSuspensionAction } from "../models/SubscriptionSuspensionAction";
import { SubscriptionSuspensionCreate } from "../models/SubscriptionSuspensionCreate";
import { SubscriptionSuspensionReason } from "../models/SubscriptionSuspensionReason";
import { SubscriptionSuspensionState } from "../models/SubscriptionSuspensionState";
import { SubscriptionUpdate } from "../models/SubscriptionUpdate";
import { SubscriptionVersion } from "../models/SubscriptionVersion";
import { SubscriptionVersionState } from "../models/SubscriptionVersionState";
import { Tax } from "../models/Tax";
import { TaxClass } from "../models/TaxClass";
import { TaxCreate } from "../models/TaxCreate";
import { TenantDatabase } from "../models/TenantDatabase";
import { Token } from "../models/Token";
import { TokenVersion } from "../models/TokenVersion";
import { TokenVersionState } from "../models/TokenVersionState";
import { TokenVersionType } from "../models/TokenVersionType";
import { TokenizationnMode } from "../models/TokenizationnMode";
import { Transaction } from "../models/Transaction";
import { TransactionAwareEntity } from "../models/TransactionAwareEntity";
import { TransactionComment } from "../models/TransactionComment";
import { TransactionCompletionMode } from "../models/TransactionCompletionMode";
import { TransactionCompletionRequest } from "../models/TransactionCompletionRequest";
import { TransactionCompletionState } from "../models/TransactionCompletionState";
import { TransactionEnvironmentSelectionStrategy } from "../models/TransactionEnvironmentSelectionStrategy";
import { TransactionGroup } from "../models/TransactionGroup";
import { TransactionGroupState } from "../models/TransactionGroupState";
import { TransactionInvoiceComment } from "../models/TransactionInvoiceComment";
import { TransactionInvoiceReplacement } from "../models/TransactionInvoiceReplacement";
import { TransactionInvoiceState } from "../models/TransactionInvoiceState";
import { TransactionLineItemUpdateRequest } from "../models/TransactionLineItemUpdateRequest";
import { TransactionState } from "../models/TransactionState";
import { TransactionUserInterfaceType } from "../models/TransactionUserInterfaceType";
import { TransactionVoidMode } from "../models/TransactionVoidMode";
import { TransactionVoidState } from "../models/TransactionVoidState";
import { TwoFactorAuthenticationType } from "../models/TwoFactorAuthenticationType";
import { UnencryptedCardData } from "../models/UnencryptedCardData";
import { UnencryptedCardDataCreate } from "../models/UnencryptedCardDataCreate";
import { User } from "../models/User";
import { UserAccountRole } from "../models/UserAccountRole";
import { UserSpaceRole } from "../models/UserSpaceRole";
import { UserType } from "../models/UserType";
import { WebhookIdentity } from "../models/WebhookIdentity";
import { WebhookListener } from "../models/WebhookListener";
import { WebhookListenerEntity } from "../models/WebhookListenerEntity";
import { WebhookUrl } from "../models/WebhookUrl";
import { AccountCreate } from "../models/AccountCreate";
import { AccountUpdate } from "../models/AccountUpdate";
import { ApplicationUser } from "../models/ApplicationUser";
import { ApplicationUserCreate } from "../models/ApplicationUserCreate";
import { ApplicationUserUpdate } from "../models/ApplicationUserUpdate";
import { Charge } from "../models/Charge";
import { ChargeAttempt } from "../models/ChargeAttempt";
import { ChargeFlowLevel } from "../models/ChargeFlowLevel";
import { ConnectorInvocation } from "../models/ConnectorInvocation";
import { DebtCollectionCaseCreate } from "../models/DebtCollectionCaseCreate";
import { DebtCollectionCaseUpdate } from "../models/DebtCollectionCaseUpdate";
import { DeliveryIndication } from "../models/DeliveryIndication";
import { HumanUserCreate } from "../models/HumanUserCreate";
import { HumanUserUpdate } from "../models/HumanUserUpdate";
import { InstallmentPaymentSlice } from "../models/InstallmentPaymentSlice";
import { PaymentLinkActive } from "../models/PaymentLinkActive";
import { PaymentLinkCreate } from "../models/PaymentLinkCreate";
import { RefundCommentActive } from "../models/RefundCommentActive";
import { RefundCommentCreate } from "../models/RefundCommentCreate";
import { SpaceCreate } from "../models/SpaceCreate";
import { SpaceUpdate } from "../models/SpaceUpdate";
import { SubscriberActive } from "../models/SubscriberActive";
import { SubscriberCreate } from "../models/SubscriberCreate";
import { SubscriptionAffiliateCreate } from "../models/SubscriptionAffiliateCreate";
import { SubscriptionAffiliateDeleted } from "../models/SubscriptionAffiliateDeleted";
import { SubscriptionAffiliateInactive } from "../models/SubscriptionAffiliateInactive";
import { SubscriptionMetricActive } from "../models/SubscriptionMetricActive";
import { SubscriptionMetricCreate } from "../models/SubscriptionMetricCreate";
import { SubscriptionPending } from "../models/SubscriptionPending";
import { SubscriptionProductActive } from "../models/SubscriptionProductActive";
import { SubscriptionProductCreate } from "../models/SubscriptionProductCreate";
import { SubscriptionSuspensionRunning } from "../models/SubscriptionSuspensionRunning";
import { TokenCreate } from "../models/TokenCreate";
import { TokenUpdate } from "../models/TokenUpdate";
import { TransactionCommentActive } from "../models/TransactionCommentActive";
import { TransactionCommentCreate } from "../models/TransactionCommentCreate";
import { TransactionCompletion } from "../models/TransactionCompletion";
import { TransactionCreate } from "../models/TransactionCreate";
import { TransactionInvoice } from "../models/TransactionInvoice";
import { TransactionInvoiceCommentActive } from "../models/TransactionInvoiceCommentActive";
import { TransactionInvoiceCommentCreate } from "../models/TransactionInvoiceCommentCreate";
import { TransactionLineItemVersion } from "../models/TransactionLineItemVersion";
import { TransactionPending } from "../models/TransactionPending";
import { TransactionVoid } from "../models/TransactionVoid";
import { WebhookListenerCreate } from "../models/WebhookListenerCreate";
import { WebhookListenerUpdate } from "../models/WebhookListenerUpdate";
import { WebhookUrlCreate } from "../models/WebhookUrlCreate";
import { WebhookUrlUpdate } from "../models/WebhookUrlUpdate";
import { ApplicationUserCreateWithMacKey } from "../models/ApplicationUserCreateWithMacKey";
import { SubscriptionAffiliateDeleting } from "../models/SubscriptionAffiliateDeleting";

class ObjectSerializer {

    /* tslint:disable:no-unused-variable */
    static primitives: Array<string> = [
        "string",
        "boolean",
        "double",
        "integer",
        "long",
        "float",
        "number",
        "any"
    ];

    static enumsMap: {[index: string]: any} = {
        "AccountState": AccountState,
        "AccountType": AccountType,
        "ChargeAttemptEnvironment": ChargeAttemptEnvironment,
        "ChargeAttemptState": ChargeAttemptState,
        "ChargeFlowLevelState": ChargeFlowLevelState,
        "ChargeState": ChargeState,
        "ChargeType": ChargeType,
        "ClientErrorType": ClientErrorType,
        "ConnectorInvocationStage": ConnectorInvocationStage,
        "CreationEntityState": CreationEntityState,
        "CriteriaOperator": CriteriaOperator,
        "CustomersPresence": CustomersPresence,
        "DataCollectionType": DataCollectionType,
        "DebtCollectionCaseState": DebtCollectionCaseState,
        "DebtCollectionEnvironment": DebtCollectionEnvironment,
        "DeliveryIndicationState": DeliveryIndicationState,
        "EntityQueryFilterType": EntityQueryFilterType,
        "EntityQueryOrderByType": EntityQueryOrderByType,
        "Environment": Environment,
        "FailureCategory": FailureCategory,
        "Gender": Gender,
        "InstallmentPaymentSliceState": InstallmentPaymentSliceState,
        "InstallmentPaymentState": InstallmentPaymentState,
        "LabelDescriptorCategory": LabelDescriptorCategory,
        "LineItemType": LineItemType,
        "ManualTaskActionStyle": ManualTaskActionStyle,
        "ManualTaskState": ManualTaskState,
        "OneClickPaymentMode": OneClickPaymentMode,
        "PaymentContractState": PaymentContractState,
        "PaymentLinkProtectionMode": PaymentLinkProtectionMode,
        "PaymentPrimaryRiskTaker": PaymentPrimaryRiskTaker,
        "ProductFeeType": ProductFeeType,
        "ProductMeteredTierPricing": ProductMeteredTierPricing,
        "RefundState": RefundState,
        "RefundType": RefundType,
        "ResourceState": ResourceState,
        "RestAddressFormatField": RestAddressFormatField,
        "SpaceReferenceState": SpaceReferenceState,
        "SubscriptionChargeProcessingType": SubscriptionChargeProcessingType,
        "SubscriptionChargeState": SubscriptionChargeState,
        "SubscriptionChargeType": SubscriptionChargeType,
        "SubscriptionLedgerEntryState": SubscriptionLedgerEntryState,
        "SubscriptionPeriodBillState": SubscriptionPeriodBillState,
        "SubscriptionProductComponentReferenceState": SubscriptionProductComponentReferenceState,
        "SubscriptionProductState": SubscriptionProductState,
        "SubscriptionProductVersionState": SubscriptionProductVersionState,
        "SubscriptionState": SubscriptionState,
        "SubscriptionSuspensionAction": SubscriptionSuspensionAction,
        "SubscriptionSuspensionReason": SubscriptionSuspensionReason,
        "SubscriptionSuspensionState": SubscriptionSuspensionState,
        "SubscriptionVersionState": SubscriptionVersionState,
        "TokenVersionState": TokenVersionState,
        "TokenizationnMode": TokenizationnMode,
        "TransactionCompletionMode": TransactionCompletionMode,
        "TransactionCompletionState": TransactionCompletionState,
        "TransactionEnvironmentSelectionStrategy": TransactionEnvironmentSelectionStrategy,
        "TransactionGroupState": TransactionGroupState,
        "TransactionInvoiceState": TransactionInvoiceState,
        "TransactionState": TransactionState,
        "TransactionUserInterfaceType": TransactionUserInterfaceType,
        "TransactionVoidMode": TransactionVoidMode,
        "TransactionVoidState": TransactionVoidState,
        "UserType": UserType,
    }

    static typeMap: {[index: string]: any} = {
                "AbstractAccountUpdate": AbstractAccountUpdate,
                "AbstractApplicationUserUpdate": AbstractApplicationUserUpdate,
                "AbstractDebtCollectionCaseUpdate": AbstractDebtCollectionCaseUpdate,
                "AbstractHumanUserUpdate": AbstractHumanUserUpdate,
                "AbstractPaymentLinkUpdate": AbstractPaymentLinkUpdate,
                "AbstractRefundCommentActive": AbstractRefundCommentActive,
                "AbstractSpaceUpdate": AbstractSpaceUpdate,
                "AbstractSubscriberUpdate": AbstractSubscriberUpdate,
                "AbstractSubscriptionAffiliateUpdate": AbstractSubscriptionAffiliateUpdate,
                "AbstractSubscriptionMetricUpdate": AbstractSubscriptionMetricUpdate,
                "AbstractSubscriptionProductActive": AbstractSubscriptionProductActive,
                "AbstractTokenUpdate": AbstractTokenUpdate,
                "AbstractTransactionCommentActive": AbstractTransactionCommentActive,
                "AbstractTransactionInvoiceCommentActive": AbstractTransactionInvoiceCommentActive,
                "AbstractTransactionPending": AbstractTransactionPending,
                "AbstractWebhookListenerUpdate": AbstractWebhookListenerUpdate,
                "AbstractWebhookUrlUpdate": AbstractWebhookUrlUpdate,
                "Account": Account,
                "Address": Address,
                "AddressCreate": AddressCreate,
                "ChargeFlow": ChargeFlow,
                "ChargeFlowLevelConfiguration": ChargeFlowLevelConfiguration,
                "ChargeFlowLevelConfigurationType": ChargeFlowLevelConfigurationType,
                "ClientError": ClientError,
                "CompletionLineItem": CompletionLineItem,
                "CompletionLineItemCreate": CompletionLineItemCreate,
                "Condition": Condition,
                "ConditionType": ConditionType,
                "DatabaseTranslatedString": DatabaseTranslatedString,
                "DatabaseTranslatedStringCreate": DatabaseTranslatedStringCreate,
                "DatabaseTranslatedStringItem": DatabaseTranslatedStringItem,
                "DatabaseTranslatedStringItemCreate": DatabaseTranslatedStringItemCreate,
                "DebtCollectionCase": DebtCollectionCase,
                "DebtCollectionCaseDocument": DebtCollectionCaseDocument,
                "DebtCollectionCaseSource": DebtCollectionCaseSource,
                "DebtCollectionReceipt": DebtCollectionReceipt,
                "DebtCollectionReceiptSource": DebtCollectionReceiptSource,
                "DebtCollector": DebtCollector,
                "DebtCollectorCondition": DebtCollectorCondition,
                "DebtCollectorConditionType": DebtCollectorConditionType,
                "DebtCollectorConfiguration": DebtCollectorConfiguration,
                "DeliveryIndicationDecisionReason": DeliveryIndicationDecisionReason,
                "DocumentTemplate": DocumentTemplate,
                "DocumentTemplateType": DocumentTemplateType,
                "DocumentTemplateTypeGroup": DocumentTemplateTypeGroup,
                "EntityExportRequest": EntityExportRequest,
                "EntityQuery": EntityQuery,
                "EntityQueryFilter": EntityQueryFilter,
                "EntityQueryOrderBy": EntityQueryOrderBy,
                "FailureReason": FailureReason,
                "Feature": Feature,
                "HumanUser": HumanUser,
                "InstallmentCalculatedPlan": InstallmentCalculatedPlan,
                "InstallmentCalculatedSlice": InstallmentCalculatedSlice,
                "InstallmentPayment": InstallmentPayment,
                "InstallmentPlanConfiguration": InstallmentPlanConfiguration,
                "InstallmentPlanSliceConfiguration": InstallmentPlanSliceConfiguration,
                "Label": Label,
                "LabelDescriptor": LabelDescriptor,
                "LabelDescriptorGroup": LabelDescriptorGroup,
                "LabelDescriptorType": LabelDescriptorType,
                "LegalOrganizationForm": LegalOrganizationForm,
                "LineItem": LineItem,
                "LineItemAttribute": LineItemAttribute,
                "LineItemAttributeCreate": LineItemAttributeCreate,
                "LineItemCreate": LineItemCreate,
                "LineItemReduction": LineItemReduction,
                "LineItemReductionCreate": LineItemReductionCreate,
                "LocalizedString": LocalizedString,
                "ManualTask": ManualTask,
                "ManualTaskAction": ManualTaskAction,
                "ManualTaskType": ManualTaskType,
                "MetricUsage": MetricUsage,
                "PaymentConnector": PaymentConnector,
                "PaymentConnectorConfiguration": PaymentConnectorConfiguration,
                "PaymentConnectorFeature": PaymentConnectorFeature,
                "PaymentContract": PaymentContract,
                "PaymentContractType": PaymentContractType,
                "PaymentLink": PaymentLink,
                "PaymentLinkUpdate": PaymentLinkUpdate,
                "PaymentMethod": PaymentMethod,
                "PaymentMethodBrand": PaymentMethodBrand,
                "PaymentMethodConfiguration": PaymentMethodConfiguration,
                "PaymentProcessor": PaymentProcessor,
                "PaymentProcessorConfiguration": PaymentProcessorConfiguration,
                "Permission": Permission,
                "PersistableCurrencyAmount": PersistableCurrencyAmount,
                "PersistableCurrencyAmountUpdate": PersistableCurrencyAmountUpdate,
                "ProductMeteredFee": ProductMeteredFee,
                "ProductMeteredFeeUpdate": ProductMeteredFeeUpdate,
                "ProductMeteredTierFee": ProductMeteredTierFee,
                "ProductMeteredTierFeeUpdate": ProductMeteredTierFeeUpdate,
                "ProductPeriodFee": ProductPeriodFee,
                "ProductPeriodFeeUpdate": ProductPeriodFeeUpdate,
                "ProductSetupFee": ProductSetupFee,
                "ProductSetupFeeUpdate": ProductSetupFeeUpdate,
                "Refund": Refund,
                "RefundComment": RefundComment,
                "RefundCreate": RefundCreate,
                "RenderedDocument": RenderedDocument,
                "ResourcePath": ResourcePath,
                "RestAddressFormat": RestAddressFormat,
                "RestCountry": RestCountry,
                "RestCountryState": RestCountryState,
                "RestCurrency": RestCurrency,
                "RestLanguage": RestLanguage,
                "Role": Role,
                "Scope": Scope,
                "ServerError": ServerError,
                "Space": Space,
                "SpaceAddress": SpaceAddress,
                "SpaceAddressCreate": SpaceAddressCreate,
                "SpaceReference": SpaceReference,
                "SpaceView": SpaceView,
                "StaticValue": StaticValue,
                "Subscriber": Subscriber,
                "SubscriberUpdate": SubscriberUpdate,
                "Subscription": Subscription,
                "SubscriptionAffiliate": SubscriptionAffiliate,
                "SubscriptionAffiliateUpdate": SubscriptionAffiliateUpdate,
                "SubscriptionChangeRequest": SubscriptionChangeRequest,
                "SubscriptionCharge": SubscriptionCharge,
                "SubscriptionChargeCreate": SubscriptionChargeCreate,
                "SubscriptionCreateRequest": SubscriptionCreateRequest,
                "SubscriptionLedgerEntry": SubscriptionLedgerEntry,
                "SubscriptionLedgerEntryCreate": SubscriptionLedgerEntryCreate,
                "SubscriptionMetric": SubscriptionMetric,
                "SubscriptionMetricType": SubscriptionMetricType,
                "SubscriptionMetricUpdate": SubscriptionMetricUpdate,
                "SubscriptionMetricUsageReport": SubscriptionMetricUsageReport,
                "SubscriptionMetricUsageReportCreate": SubscriptionMetricUsageReportCreate,
                "SubscriptionPeriodBill": SubscriptionPeriodBill,
                "SubscriptionProduct": SubscriptionProduct,
                "SubscriptionProductComponent": SubscriptionProductComponent,
                "SubscriptionProductComponentGroup": SubscriptionProductComponentGroup,
                "SubscriptionProductComponentGroupUpdate": SubscriptionProductComponentGroupUpdate,
                "SubscriptionProductComponentReference": SubscriptionProductComponentReference,
                "SubscriptionProductComponentUpdate": SubscriptionProductComponentUpdate,
                "SubscriptionProductRetirement": SubscriptionProductRetirement,
                "SubscriptionProductRetirementCreate": SubscriptionProductRetirementCreate,
                "SubscriptionProductVersion": SubscriptionProductVersion,
                "SubscriptionProductVersionPending": SubscriptionProductVersionPending,
                "SubscriptionProductVersionRetirement": SubscriptionProductVersionRetirement,
                "SubscriptionProductVersionRetirementCreate": SubscriptionProductVersionRetirementCreate,
                "SubscriptionSuspension": SubscriptionSuspension,
                "SubscriptionSuspensionCreate": SubscriptionSuspensionCreate,
                "SubscriptionUpdate": SubscriptionUpdate,
                "SubscriptionVersion": SubscriptionVersion,
                "Tax": Tax,
                "TaxClass": TaxClass,
                "TaxCreate": TaxCreate,
                "TenantDatabase": TenantDatabase,
                "Token": Token,
                "TokenVersion": TokenVersion,
                "TokenVersionType": TokenVersionType,
                "Transaction": Transaction,
                "TransactionAwareEntity": TransactionAwareEntity,
                "TransactionComment": TransactionComment,
                "TransactionCompletionRequest": TransactionCompletionRequest,
                "TransactionGroup": TransactionGroup,
                "TransactionInvoiceComment": TransactionInvoiceComment,
                "TransactionInvoiceReplacement": TransactionInvoiceReplacement,
                "TransactionLineItemUpdateRequest": TransactionLineItemUpdateRequest,
                "TwoFactorAuthenticationType": TwoFactorAuthenticationType,
                "UnencryptedCardData": UnencryptedCardData,
                "UnencryptedCardDataCreate": UnencryptedCardDataCreate,
                "User": User,
                "UserAccountRole": UserAccountRole,
                "UserSpaceRole": UserSpaceRole,
                "WebhookIdentity": WebhookIdentity,
                "WebhookListener": WebhookListener,
                "WebhookListenerEntity": WebhookListenerEntity,
                "WebhookUrl": WebhookUrl,
                "AccountCreate": AccountCreate,
                "AccountUpdate": AccountUpdate,
                "ApplicationUser": ApplicationUser,
                "ApplicationUserCreate": ApplicationUserCreate,
                "ApplicationUserUpdate": ApplicationUserUpdate,
                "Charge": Charge,
                "ChargeAttempt": ChargeAttempt,
                "ChargeFlowLevel": ChargeFlowLevel,
                "ConnectorInvocation": ConnectorInvocation,
                "DebtCollectionCaseCreate": DebtCollectionCaseCreate,
                "DebtCollectionCaseUpdate": DebtCollectionCaseUpdate,
                "DeliveryIndication": DeliveryIndication,
                "HumanUserCreate": HumanUserCreate,
                "HumanUserUpdate": HumanUserUpdate,
                "InstallmentPaymentSlice": InstallmentPaymentSlice,
                "PaymentLinkActive": PaymentLinkActive,
                "PaymentLinkCreate": PaymentLinkCreate,
                "RefundCommentActive": RefundCommentActive,
                "RefundCommentCreate": RefundCommentCreate,
                "SpaceCreate": SpaceCreate,
                "SpaceUpdate": SpaceUpdate,
                "SubscriberActive": SubscriberActive,
                "SubscriberCreate": SubscriberCreate,
                "SubscriptionAffiliateCreate": SubscriptionAffiliateCreate,
                "SubscriptionAffiliateDeleted": SubscriptionAffiliateDeleted,
                "SubscriptionAffiliateInactive": SubscriptionAffiliateInactive,
                "SubscriptionMetricActive": SubscriptionMetricActive,
                "SubscriptionMetricCreate": SubscriptionMetricCreate,
                "SubscriptionPending": SubscriptionPending,
                "SubscriptionProductActive": SubscriptionProductActive,
                "SubscriptionProductCreate": SubscriptionProductCreate,
                "SubscriptionSuspensionRunning": SubscriptionSuspensionRunning,
                "TokenCreate": TokenCreate,
                "TokenUpdate": TokenUpdate,
                "TransactionCommentActive": TransactionCommentActive,
                "TransactionCommentCreate": TransactionCommentCreate,
                "TransactionCompletion": TransactionCompletion,
                "TransactionCreate": TransactionCreate,
                "TransactionInvoice": TransactionInvoice,
                "TransactionInvoiceCommentActive": TransactionInvoiceCommentActive,
                "TransactionInvoiceCommentCreate": TransactionInvoiceCommentCreate,
                "TransactionLineItemVersion": TransactionLineItemVersion,
                "TransactionPending": TransactionPending,
                "TransactionVoid": TransactionVoid,
                "WebhookListenerCreate": WebhookListenerCreate,
                "WebhookListenerUpdate": WebhookListenerUpdate,
                "WebhookUrlCreate": WebhookUrlCreate,
                "WebhookUrlUpdate": WebhookUrlUpdate,
                "ApplicationUserCreateWithMacKey": ApplicationUserCreateWithMacKey,
                "SubscriptionAffiliateDeleting": SubscriptionAffiliateDeleting,
    }

    public static findCorrectType(data: any, expectedType: string) {
        if (data == undefined) {
            return expectedType;
        } else if (ObjectSerializer.primitives.indexOf(expectedType.toLowerCase()) !== -1) {
            return expectedType;
        } else if (expectedType === "Date") {
            return expectedType;
        } else {
            if (ObjectSerializer.enumsMap[expectedType]) {
                return expectedType;
            }

            if (!ObjectSerializer.typeMap[expectedType]) {
                return expectedType; // w/e we don't know the type
            }

            // Check the discriminator
            let discriminatorProperty = ObjectSerializer.typeMap[expectedType].discriminator;
            if (discriminatorProperty == null) {
                return expectedType; // the type does not have a discriminator. use it.
            } else {
                if (data[discriminatorProperty]) {
                    return data[discriminatorProperty]; // use the type given in the discriminator
                } else {
                    return expectedType; // discriminator was not present (or an empty string)
                }
            }
        }
    }

    public static serialize(data: any, type: string) {
        if (data == undefined) {
            return data;
        } else if (ObjectSerializer.primitives.indexOf(type.toLowerCase()) !== -1) {
            return data;
        } else if (type.lastIndexOf("Array<", 0) === 0) { // string.startsWith pre es6
            let subType: string = type.replace("Array<", ""); // Array<Type> => Type>
            subType = subType.substring(0, subType.length - 1); // Type> => Type
            let transformedData: any[] = [];
            for (let index in data) {
                let date = data[index];
                transformedData.push(ObjectSerializer.serialize(date, subType));
            }
            return transformedData;
        } else if (type === "Date") {
            return data.toString();
        } else {
            if (ObjectSerializer.enumsMap[type]) {
                return data;
            }
            if (!ObjectSerializer.typeMap[type]) { // in case we dont know the type
                return data;
            }

            // get the map for the correct type.
            let attributeTypes = ObjectSerializer.typeMap[type].getAttributeTypeMap();
            let instance: {[index: string]: any} = {};
            for (let index in attributeTypes) {
                let attributeType = attributeTypes[index];
                instance[attributeType.baseName] = ObjectSerializer.serialize(data[attributeType.name], attributeType.type);
            }
            return instance;
        }
    }

    public static deserialize(data: any, type: string) {
        // polymorphism may change the actual type.
        type = ObjectSerializer.findCorrectType(data, type);
        if (data == undefined) {
            return data;
        } else if (ObjectSerializer.primitives.indexOf(type.toLowerCase()) !== -1) {
            return data;
        } else if (type.lastIndexOf("Array<", 0) === 0) { // string.startsWith pre es6
            let subType: string = type.replace("Array<", ""); // Array<Type> => Type>
            subType = subType.substring(0, subType.length - 1); // Type> => Type
            let transformedData: any[] = [];
            for (let index in data) {
                let date = data[index];
                transformedData.push(ObjectSerializer.deserialize(date, subType));
            }
            return transformedData;
        } else if (type === "Date") {
            return new Date(data);
        } else {
            if (ObjectSerializer.enumsMap[type]) {// is Enum
                return data;
            }

            if (!ObjectSerializer.typeMap[type]) { // dont know the type
                return data;
            }
            let instance = new ObjectSerializer.typeMap[type]();
            let attributeTypes = ObjectSerializer.typeMap[type].getAttributeTypeMap();
            for (let index in attributeTypes) {
                let attributeType = attributeTypes[index];
                instance[attributeType.name] = ObjectSerializer.deserialize(data[attributeType.baseName], attributeType.type);
            }
            return instance;
        }
    }
}

export { ObjectSerializer }