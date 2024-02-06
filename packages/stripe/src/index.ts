// @ts-ignore
// @ts-nocheck
import { Stripe } from "stripe";

import { env } from "./env.mjs";

export * from "./webhooks";

export type { Stripe };

export const stripe = new Stripe(env.STRIPE_API_KEY, {
  typescript: true,
});

/**
 * Stripe typing is hot garbage. This makes it slightly less so.
 * https://github.com/kgajera/stripe-event-types
 */
declare module "stripe" {
  // eslint-disable-next-line @typescript-eslint/no-namespace
  namespace Stripe {
    type DiscriminatedEvent =
      | DiscriminatedEvent.AccountApplicationEvent
      | DiscriminatedEvent.AccountExternalAccountEvent
      | DiscriminatedEvent.AccountEvent
      | DiscriminatedEvent.ApplicationFeeRefundEvent
      | DiscriminatedEvent.ApplicationFeeEvent
      | DiscriminatedEvent.BalanceEvent
      | DiscriminatedEvent.BillingPortalConfigurationEvent
      | DiscriminatedEvent.BillingPortalSessionEvent
      | DiscriminatedEvent.CapabilityEvent
      | DiscriminatedEvent.CashBalanceEvent
      | DiscriminatedEvent.ChargeDisputeEvent
      | DiscriminatedEvent.ChargeRefundEvent
      | DiscriminatedEvent.ChargeEvent
      | DiscriminatedEvent.CheckoutSessionEvent
      | DiscriminatedEvent.CouponEvent
      | DiscriminatedEvent.CreditNoteEvent
      | DiscriminatedEvent.CustomerCashBalanceTransactionEvent
      | DiscriminatedEvent.CustomerDiscountEvent
      | DiscriminatedEvent.CustomerSourceEvent
      | DiscriminatedEvent.CustomerSubscriptionEvent
      | DiscriminatedEvent.CustomerTaxIdEvent
      | DiscriminatedEvent.CustomerEvent
      | DiscriminatedEvent.FileEvent
      | DiscriminatedEvent.FinancialConnectionsAccountEvent
      | DiscriminatedEvent.IdentityVerificationSessionEvent
      | DiscriminatedEvent.InvoiceEvent
      | DiscriminatedEvent.InvoiceitemEvent
      | DiscriminatedEvent.IssuingAuthorizationEvent
      | DiscriminatedEvent.IssuingCardEvent
      | DiscriminatedEvent.IssuingCardholderEvent
      | DiscriminatedEvent.IssuingDisputeEvent
      | DiscriminatedEvent.IssuingTransactionEvent
      | DiscriminatedEvent.MandateEvent
      | DiscriminatedEvent.OrderEvent
      | DiscriminatedEvent.PaymentIntentEvent
      | DiscriminatedEvent.PaymentLinkEvent
      | DiscriminatedEvent.PaymentMethodEvent
      | DiscriminatedEvent.PayoutEvent
      | DiscriminatedEvent.PersonEvent
      | DiscriminatedEvent.PlanEvent
      | DiscriminatedEvent.PriceEvent
      | DiscriminatedEvent.ProductEvent
      | DiscriminatedEvent.PromotionCodeEvent
      | DiscriminatedEvent.QuoteEvent
      | DiscriminatedEvent.RadarEarlyFraudWarningEvent
      | DiscriminatedEvent.RecipientEvent
      | DiscriminatedEvent.RefundEvent
      | DiscriminatedEvent.ReportingReportRunEvent
      | DiscriminatedEvent.ReportingReportTypeEvent
      | DiscriminatedEvent.ReviewEvent
      | DiscriminatedEvent.SetupIntentEvent
      | DiscriminatedEvent.SigmaScheduledQueryRunEvent
      | DiscriminatedEvent.SkuEvent
      | DiscriminatedEvent.SourceTransactionEvent
      | DiscriminatedEvent.SourceEvent
      | DiscriminatedEvent.SubscriptionScheduleEvent
      | DiscriminatedEvent.TaxRateEvent
      | DiscriminatedEvent.TerminalReaderEvent
      | DiscriminatedEvent.TestHelpersTestClockEvent
      | DiscriminatedEvent.TopupEvent
      | DiscriminatedEvent.TransferEvent
      | DiscriminatedEvent.TreasuryCreditReversalEvent
      | DiscriminatedEvent.TreasuryDebitReversalEvent
      | DiscriminatedEvent.TreasuryFinancialAccountEvent
      | DiscriminatedEvent.TreasuryInboundTransferEvent
      | DiscriminatedEvent.TreasuryOutboundPaymentEvent
      | DiscriminatedEvent.TreasuryOutboundTransferEvent
      | DiscriminatedEvent.TreasuryReceivedCreditEvent
      | DiscriminatedEvent.TreasuryReceivedDebitEvent;

    // eslint-disable-next-line @typescript-eslint/no-namespace
    namespace DiscriminatedEvent {
      /**
       * All possible event types: https://stripe.com/docs/api/events/types
       */
      type Type =
        | "account.application.authorized"
        | "account.application.deauthorized"
        | "account.external_account.created"
        | "account.external_account.deleted"
        | "account.external_account.updated"
        | "account.updated"
        | "application_fee.created"
        | "application_fee.refund.updated"
        | "application_fee.refunded"
        | "balance.available"
        | "billing_portal.configuration.created"
        | "billing_portal.configuration.updated"
        | "billing_portal.session.created"
        | "capability.updated"
        | "cash_balance.funds_available"
        | "charge.captured"
        | "charge.dispute.closed"
        | "charge.dispute.created"
        | "charge.dispute.funds_reinstated"
        | "charge.dispute.funds_withdrawn"
        | "charge.dispute.updated"
        | "charge.expired"
        | "charge.failed"
        | "charge.pending"
        | "charge.refund.updated"
        | "charge.refunded"
        | "charge.succeeded"
        | "charge.updated"
        | "checkout.session.async_payment_failed"
        | "checkout.session.async_payment_succeeded"
        | "checkout.session.completed"
        | "checkout.session.expired"
        | "coupon.created"
        | "coupon.deleted"
        | "coupon.updated"
        | "credit_note.created"
        | "credit_note.updated"
        | "credit_note.voided"
        | "customer_cash_balance_transaction.created"
        | "customer.created"
        | "customer.deleted"
        | "customer.discount.created"
        | "customer.discount.deleted"
        | "customer.discount.updated"
        | "customer.source.created"
        | "customer.source.deleted"
        | "customer.source.expiring"
        | "customer.source.updated"
        | "customer.subscription.created"
        | "customer.subscription.deleted"
        | "customer.subscription.paused"
        | "customer.subscription.pending_update_applied"
        | "customer.subscription.pending_update_expired"
        | "customer.subscription.resumed"
        | "customer.subscription.trial_will_end"
        | "customer.subscription.updated"
        | "customer.tax_id.created"
        | "customer.tax_id.deleted"
        | "customer.tax_id.updated"
        | "customer.updated"
        | "file.created"
        | "financial_connections.account.created"
        | "financial_connections.account.deactivated"
        | "financial_connections.account.disconnected"
        | "financial_connections.account.reactivated"
        | "financial_connections.account.refreshed_balance"
        | "identity.verification_session.canceled"
        | "identity.verification_session.created"
        | "identity.verification_session.processing"
        | "identity.verification_session.redacted"
        | "identity.verification_session.requires_input"
        | "identity.verification_session.verified"
        | "invoice.created"
        | "invoice.deleted"
        | "invoice.finalization_failed"
        | "invoice.finalized"
        | "invoice.marked_uncollectible"
        | "invoice.paid"
        | "invoice.payment_action_required"
        | "invoice.payment_failed"
        | "invoice.payment_succeeded"
        | "invoice.sent"
        | "invoice.upcoming"
        | "invoice.updated"
        | "invoice.voided"
        | "invoiceitem.created"
        | "invoiceitem.deleted"
        | "invoiceitem.updated"
        | "issuing_authorization.created"
        | "issuing_authorization.request"
        | "issuing_authorization.updated"
        | "issuing_card.created"
        | "issuing_card.updated"
        | "issuing_cardholder.created"
        | "issuing_cardholder.updated"
        | "issuing_dispute.closed"
        | "issuing_dispute.created"
        | "issuing_dispute.funds_reinstated"
        | "issuing_dispute.submitted"
        | "issuing_dispute.updated"
        | "issuing_transaction.created"
        | "issuing_transaction.updated"
        | "mandate.updated"
        | "order.created"
        | "payment_intent.amount_capturable_updated"
        | "payment_intent.canceled"
        | "payment_intent.created"
        | "payment_intent.partially_funded"
        | "payment_intent.payment_failed"
        | "payment_intent.processing"
        | "payment_intent.requires_action"
        | "payment_intent.succeeded"
        | "payment_link.created"
        | "payment_link.updated"
        | "payment_method.attached"
        | "payment_method.automatically_updated"
        | "payment_method.detached"
        | "payment_method.updated"
        | "payout.canceled"
        | "payout.created"
        | "payout.failed"
        | "payout.paid"
        | "payout.reconciliation_completed"
        | "payout.updated"
        | "person.created"
        | "person.deleted"
        | "person.updated"
        | "plan.created"
        | "plan.deleted"
        | "plan.updated"
        | "price.created"
        | "price.deleted"
        | "price.updated"
        | "product.created"
        | "product.deleted"
        | "product.updated"
        | "promotion_code.created"
        | "promotion_code.updated"
        | "quote.accepted"
        | "quote.canceled"
        | "quote.created"
        | "quote.finalized"
        | "radar.early_fraud_warning.created"
        | "radar.early_fraud_warning.updated"
        | "recipient.created"
        | "recipient.deleted"
        | "recipient.updated"
        | "refund.created"
        | "refund.updated"
        | "reporting.report_run.failed"
        | "reporting.report_run.succeeded"
        | "reporting.report_type.updated"
        | "review.closed"
        | "review.opened"
        | "setup_intent.canceled"
        | "setup_intent.created"
        | "setup_intent.requires_action"
        | "setup_intent.setup_failed"
        | "setup_intent.succeeded"
        | "sigma.scheduled_query_run.created"
        | "sku.created"
        | "sku.deleted"
        | "sku.updated"
        | "source.canceled"
        | "source.chargeable"
        | "source.failed"
        | "source.mandate_notification"
        | "source.refund_attributes_required"
        | "source.transaction.created"
        | "source.transaction.updated"
        | "subscription_schedule.aborted"
        | "subscription_schedule.canceled"
        | "subscription_schedule.completed"
        | "subscription_schedule.created"
        | "subscription_schedule.expiring"
        | "subscription_schedule.released"
        | "subscription_schedule.updated"
        | "tax_rate.created"
        | "tax_rate.updated"
        | "terminal.reader.action_failed"
        | "terminal.reader.action_succeeded"
        | "test_helpers.test_clock.advancing"
        | "test_helpers.test_clock.created"
        | "test_helpers.test_clock.deleted"
        | "test_helpers.test_clock.internal_failure"
        | "test_helpers.test_clock.ready"
        | "topup.canceled"
        | "topup.created"
        | "topup.failed"
        | "topup.reversed"
        | "topup.succeeded"
        | "transfer.created"
        | "transfer.reversed"
        | "transfer.updated"
        | "treasury.credit_reversal.created"
        | "treasury.credit_reversal.posted"
        | "treasury.debit_reversal.completed"
        | "treasury.debit_reversal.created"
        | "treasury.debit_reversal.initial_credit_granted"
        | "treasury.financial_account.closed"
        | "treasury.financial_account.created"
        | "treasury.financial_account.features_status_updated"
        | "treasury.inbound_transfer.canceled"
        | "treasury.inbound_transfer.created"
        | "treasury.inbound_transfer.failed"
        | "treasury.inbound_transfer.succeeded"
        | "treasury.outbound_payment.canceled"
        | "treasury.outbound_payment.created"
        | "treasury.outbound_payment.expected_arrival_date_updated"
        | "treasury.outbound_payment.failed"
        | "treasury.outbound_payment.posted"
        | "treasury.outbound_payment.returned"
        | "treasury.outbound_transfer.canceled"
        | "treasury.outbound_transfer.created"
        | "treasury.outbound_transfer.expected_arrival_date_updated"
        | "treasury.outbound_transfer.failed"
        | "treasury.outbound_transfer.posted"
        | "treasury.outbound_transfer.returned"
        | "treasury.received_credit.created"
        | "treasury.received_credit.failed"
        | "treasury.received_credit.succeeded"
        | "treasury.received_debit.created";

      interface Data<T> {
        /**
         * Object containing the API resource relevant to the event. For example, an `invoice.created` event will have a full [invoice object](https://stripe.com/docs/api#invoice_object) as the value of the object key.
         */
        object: T;

        /**
         * Object containing the names of the attributes that have changed, and their previous values (sent along only with *.updated events).
         */
        previous_attributes?: Partial<T>;
      }

      interface AccountApplicationEvent extends Stripe.Event {
        type:
          | "account.application.authorized"
          | "account.application.deauthorized";
        data: DiscriminatedEvent.Data<"application">;
      }

      interface AccountExternalAccountEvent extends Stripe.Event {
        type:
          | "account.external_account.created"
          | "account.external_account.deleted"
          | "account.external_account.updated";
        data: DiscriminatedEvent.Data<Stripe.Card | Stripe.BankAccount>;
      }

      interface AccountEvent extends Stripe.Event {
        type: "account.updated";
        data: DiscriminatedEvent.Data<Stripe.Account>;
      }

      interface ApplicationFeeRefundEvent extends Stripe.Event {
        type: "application_fee.refund.updated";
        data: DiscriminatedEvent.Data<Stripe.FeeRefund>;
      }

      interface ApplicationFeeEvent extends Stripe.Event {
        type: "application_fee.created" | "application_fee.refunded";
        data: DiscriminatedEvent.Data<Stripe.ApplicationFee>;
      }

      interface BalanceEvent extends Stripe.Event {
        type: "balance.available";
        data: DiscriminatedEvent.Data<Stripe.Balance>;
      }

      interface BillingPortalConfigurationEvent extends Stripe.Event {
        type:
          | "billing_portal.configuration.created"
          | "billing_portal.configuration.updated";
        data: DiscriminatedEvent.Data<Stripe.BillingPortal.Configuration>;
      }

      interface BillingPortalSessionEvent extends Stripe.Event {
        type: "billing_portal.session.created";
        data: DiscriminatedEvent.Data<Stripe.BillingPortal.Session>;
      }

      interface CapabilityEvent extends Stripe.Event {
        type: "capability.updated";
        data: DiscriminatedEvent.Data<Stripe.Capability>;
      }

      interface CashBalanceEvent extends Stripe.Event {
        type: "cash_balance.funds_available";
        data: DiscriminatedEvent.Data<Stripe.CashBalance>;
      }

      interface ChargeDisputeEvent extends Stripe.Event {
        type:
          | "charge.dispute.closed"
          | "charge.dispute.created"
          | "charge.dispute.funds_reinstated"
          | "charge.dispute.funds_withdrawn"
          | "charge.dispute.updated";
        data: DiscriminatedEvent.Data<Stripe.Dispute>;
      }

      interface ChargeRefundEvent extends Stripe.Event {
        type: "charge.refund.updated";
        data: DiscriminatedEvent.Data<Stripe.Refund>;
      }

      interface ChargeEvent extends Stripe.Event {
        type:
          | "charge.captured"
          | "charge.expired"
          | "charge.failed"
          | "charge.pending"
          | "charge.refunded"
          | "charge.succeeded"
          | "charge.updated";
        data: DiscriminatedEvent.Data<Stripe.Charge>;
      }

      interface CheckoutSessionEvent extends Stripe.Event {
        type:
          | "checkout.session.async_payment_failed"
          | "checkout.session.async_payment_succeeded"
          | "checkout.session.completed"
          | "checkout.session.expired";
        data: DiscriminatedEvent.Data<Stripe.Checkout.Session>;
      }

      interface CouponEvent extends Stripe.Event {
        type: "coupon.created" | "coupon.deleted" | "coupon.updated";
        data: DiscriminatedEvent.Data<Stripe.Coupon>;
      }

      interface CreditNoteEvent extends Stripe.Event {
        type:
          | "credit_note.created"
          | "credit_note.updated"
          | "credit_note.voided";
        data: DiscriminatedEvent.Data<Stripe.CreditNote>;
      }

      interface CustomerCashBalanceTransactionEvent extends Stripe.Event {
        type: "customer_cash_balance_transaction.created";
        data: DiscriminatedEvent.Data<Stripe.CustomerCashBalanceTransaction>;
      }

      interface CustomerDiscountEvent extends Stripe.Event {
        type:
          | "customer.discount.created"
          | "customer.discount.deleted"
          | "customer.discount.updated";
        data: DiscriminatedEvent.Data<Stripe.Discount>;
      }

      interface CustomerSourceEvent extends Stripe.Event {
        type:
          | "customer.source.created"
          | "customer.source.deleted"
          | "customer.source.expiring"
          | "customer.source.updated";
        data: DiscriminatedEvent.Data<Stripe.Card>;
      }

      interface CustomerSubscriptionEvent extends Stripe.Event {
        type:
          | "customer.subscription.created"
          | "customer.subscription.deleted"
          | "customer.subscription.paused"
          | "customer.subscription.pending_update_applied"
          | "customer.subscription.pending_update_expired"
          | "customer.subscription.resumed"
          | "customer.subscription.trial_will_end"
          | "customer.subscription.updated";
        data: DiscriminatedEvent.Data<Stripe.Subscription>;
      }

      interface CustomerTaxIdEvent extends Stripe.Event {
        type:
          | "customer.tax_id.created"
          | "customer.tax_id.deleted"
          | "customer.tax_id.updated";
        data: DiscriminatedEvent.Data<Stripe.TaxId>;
      }

      interface CustomerEvent extends Stripe.Event {
        type: "customer.created" | "customer.deleted" | "customer.updated";
        data: DiscriminatedEvent.Data<Stripe.Customer>;
      }

      interface FileEvent extends Stripe.Event {
        type: "file.created";
        data: DiscriminatedEvent.Data<Stripe.File>;
      }

      interface FinancialConnectionsAccountEvent extends Stripe.Event {
        type:
          | "financial_connections.account.created"
          | "financial_connections.account.deactivated"
          | "financial_connections.account.disconnected"
          | "financial_connections.account.reactivated"
          | "financial_connections.account.refreshed_balance";
        data: DiscriminatedEvent.Data<Stripe.FinancialConnections.Account>;
      }

      interface IdentityVerificationSessionEvent extends Stripe.Event {
        type:
          | "identity.verification_session.canceled"
          | "identity.verification_session.created"
          | "identity.verification_session.processing"
          | "identity.verification_session.redacted"
          | "identity.verification_session.requires_input"
          | "identity.verification_session.verified";
        data: DiscriminatedEvent.Data<Stripe.Identity.VerificationSession>;
      }

      interface InvoiceEvent extends Stripe.Event {
        type:
          | "invoice.created"
          | "invoice.deleted"
          | "invoice.finalization_failed"
          | "invoice.finalized"
          | "invoice.marked_uncollectible"
          | "invoice.paid"
          | "invoice.payment_action_required"
          | "invoice.payment_failed"
          | "invoice.payment_succeeded"
          | "invoice.sent"
          | "invoice.upcoming"
          | "invoice.updated"
          | "invoice.voided";
        data: DiscriminatedEvent.Data<Stripe.Invoice>;
      }

      interface InvoiceitemEvent extends Stripe.Event {
        type:
          | "invoiceitem.created"
          | "invoiceitem.deleted"
          | "invoiceitem.updated";
        data: DiscriminatedEvent.Data<Stripe.InvoiceItem>;
      }

      interface IssuingAuthorizationEvent extends Stripe.Event {
        type:
          | "issuing_authorization.created"
          | "issuing_authorization.request"
          | "issuing_authorization.updated";
        data: DiscriminatedEvent.Data<Stripe.Issuing.Authorization>;
      }

      interface IssuingCardEvent extends Stripe.Event {
        type: "issuing_card.created" | "issuing_card.updated";
        data: DiscriminatedEvent.Data<Stripe.Issuing.Card>;
      }

      interface IssuingCardholderEvent extends Stripe.Event {
        type: "issuing_cardholder.created" | "issuing_cardholder.updated";
        data: DiscriminatedEvent.Data<Stripe.Issuing.Cardholder>;
      }

      interface IssuingDisputeEvent extends Stripe.Event {
        type:
          | "issuing_dispute.closed"
          | "issuing_dispute.created"
          | "issuing_dispute.funds_reinstated"
          | "issuing_dispute.submitted"
          | "issuing_dispute.updated";
        data: DiscriminatedEvent.Data<Stripe.Issuing.Dispute>;
      }

      interface IssuingTransactionEvent extends Stripe.Event {
        type: "issuing_transaction.created" | "issuing_transaction.updated";
        data: DiscriminatedEvent.Data<Stripe.Issuing.Transaction>;
      }

      interface MandateEvent extends Stripe.Event {
        type: "mandate.updated";
        data: DiscriminatedEvent.Data<Stripe.Mandate>;
      }

      interface OrderEvent extends Stripe.Event {
        type: "order.created";
        data: DiscriminatedEvent.Data<Stripe.Event.Data>;
      }

      interface PaymentIntentEvent extends Stripe.Event {
        type:
          | "payment_intent.amount_capturable_updated"
          | "payment_intent.canceled"
          | "payment_intent.created"
          | "payment_intent.partially_funded"
          | "payment_intent.payment_failed"
          | "payment_intent.processing"
          | "payment_intent.requires_action"
          | "payment_intent.succeeded";
        data: DiscriminatedEvent.Data<Stripe.PaymentIntent>;
      }

      interface PaymentLinkEvent extends Stripe.Event {
        type: "payment_link.created" | "payment_link.updated";
        data: DiscriminatedEvent.Data<Stripe.PaymentLink>;
      }

      interface PaymentMethodEvent extends Stripe.Event {
        type:
          | "payment_method.attached"
          | "payment_method.automatically_updated"
          | "payment_method.detached"
          | "payment_method.updated";
        data: DiscriminatedEvent.Data<Stripe.PaymentMethod>;
      }

      interface PayoutEvent extends Stripe.Event {
        type:
          | "payout.canceled"
          | "payout.created"
          | "payout.failed"
          | "payout.paid"
          | "payout.reconciliation_completed"
          | "payout.updated";
        data: DiscriminatedEvent.Data<Stripe.Payout>;
      }

      interface PersonEvent extends Stripe.Event {
        type: "person.created" | "person.deleted" | "person.updated";
        data: DiscriminatedEvent.Data<Stripe.Person>;
      }

      interface PlanEvent extends Stripe.Event {
        type: "plan.created" | "plan.deleted" | "plan.updated";
        data: DiscriminatedEvent.Data<Stripe.Plan>;
      }

      interface PriceEvent extends Stripe.Event {
        type: "price.created" | "price.deleted" | "price.updated";
        data: DiscriminatedEvent.Data<Stripe.Price>;
      }

      interface ProductEvent extends Stripe.Event {
        type: "product.created" | "product.deleted" | "product.updated";
        data: DiscriminatedEvent.Data<Stripe.Product>;
      }

      interface PromotionCodeEvent extends Stripe.Event {
        type: "promotion_code.created" | "promotion_code.updated";
        data: DiscriminatedEvent.Data<Stripe.PromotionCode>;
      }

      interface QuoteEvent extends Stripe.Event {
        type:
          | "quote.accepted"
          | "quote.canceled"
          | "quote.created"
          | "quote.finalized";
        data: DiscriminatedEvent.Data<Stripe.Quote>;
      }

      interface RadarEarlyFraudWarningEvent extends Stripe.Event {
        type:
          | "radar.early_fraud_warning.created"
          | "radar.early_fraud_warning.updated";
        data: DiscriminatedEvent.Data<Stripe.Radar.EarlyFraudWarning>;
      }

      interface RecipientEvent extends Stripe.Event {
        type: "recipient.created" | "recipient.deleted" | "recipient.updated";
        data: DiscriminatedEvent.Data<Stripe.Event.Data>;
      }

      interface RefundEvent extends Stripe.Event {
        type: "refund.created" | "refund.updated";
        data: DiscriminatedEvent.Data<Stripe.Refund>;
      }

      interface ReportingReportRunEvent extends Stripe.Event {
        type: "reporting.report_run.failed" | "reporting.report_run.succeeded";
        data: DiscriminatedEvent.Data<Stripe.Reporting.ReportRun>;
      }

      interface ReportingReportTypeEvent extends Stripe.Event {
        type: "reporting.report_type.updated";
        data: DiscriminatedEvent.Data<Stripe.Reporting.ReportType>;
      }

      interface ReviewEvent extends Stripe.Event {
        type: "review.closed" | "review.opened";
        data: DiscriminatedEvent.Data<Stripe.Review>;
      }

      interface SetupIntentEvent extends Stripe.Event {
        type:
          | "setup_intent.canceled"
          | "setup_intent.created"
          | "setup_intent.requires_action"
          | "setup_intent.setup_failed"
          | "setup_intent.succeeded";
        data: DiscriminatedEvent.Data<Stripe.SetupIntent>;
      }

      interface SigmaScheduledQueryRunEvent extends Stripe.Event {
        type: "sigma.scheduled_query_run.created";
        data: DiscriminatedEvent.Data<Stripe.Sigma.ScheduledQueryRun>;
      }

      interface SkuEvent extends Stripe.Event {
        type: "sku.created" | "sku.deleted" | "sku.updated";
        data: DiscriminatedEvent.Data<Stripe.Event.Data>;
      }

      interface SourceTransactionEvent extends Stripe.Event {
        type: "source.transaction.created" | "source.transaction.updated";
        data: DiscriminatedEvent.Data<Stripe.SourceTransaction>;
      }

      interface SourceEvent extends Stripe.Event {
        type:
          | "source.canceled"
          | "source.chargeable"
          | "source.failed"
          | "source.mandate_notification"
          | "source.refund_attributes_required";
        data: DiscriminatedEvent.Data<Stripe.Card>;
      }

      interface SubscriptionScheduleEvent extends Stripe.Event {
        type:
          | "subscription_schedule.aborted"
          | "subscription_schedule.canceled"
          | "subscription_schedule.completed"
          | "subscription_schedule.created"
          | "subscription_schedule.expiring"
          | "subscription_schedule.released"
          | "subscription_schedule.updated";
        data: DiscriminatedEvent.Data<Stripe.SubscriptionSchedule>;
      }

      interface TaxRateEvent extends Stripe.Event {
        type: "tax_rate.created" | "tax_rate.updated";
        data: DiscriminatedEvent.Data<Stripe.TaxRate>;
      }

      interface TerminalReaderEvent extends Stripe.Event {
        type:
          | "terminal.reader.action_failed"
          | "terminal.reader.action_succeeded";
        data: DiscriminatedEvent.Data<Stripe.Terminal.Reader>;
      }

      interface TestHelpersTestClockEvent extends Stripe.Event {
        type:
          | "test_helpers.test_clock.advancing"
          | "test_helpers.test_clock.created"
          | "test_helpers.test_clock.deleted"
          | "test_helpers.test_clock.internal_failure"
          | "test_helpers.test_clock.ready";
        data: DiscriminatedEvent.Data<Stripe.TestHelpers.TestClock>;
      }

      interface TopupEvent extends Stripe.Event {
        type:
          | "topup.canceled"
          | "topup.created"
          | "topup.failed"
          | "topup.reversed"
          | "topup.succeeded";
        data: DiscriminatedEvent.Data<Stripe.Topup>;
      }

      interface TransferEvent extends Stripe.Event {
        type: "transfer.created" | "transfer.reversed" | "transfer.updated";
        data: DiscriminatedEvent.Data<Stripe.Transfer>;
      }

      interface TreasuryCreditReversalEvent extends Stripe.Event {
        type:
          | "treasury.credit_reversal.created"
          | "treasury.credit_reversal.posted";
        data: DiscriminatedEvent.Data<Stripe.Treasury.CreditReversal>;
      }

      interface TreasuryDebitReversalEvent extends Stripe.Event {
        type:
          | "treasury.debit_reversal.completed"
          | "treasury.debit_reversal.created"
          | "treasury.debit_reversal.initial_credit_granted";
        data: DiscriminatedEvent.Data<Stripe.Treasury.DebitReversal>;
      }

      interface TreasuryFinancialAccountEvent extends Stripe.Event {
        type:
          | "treasury.financial_account.closed"
          | "treasury.financial_account.created"
          | "treasury.financial_account.features_status_updated";
        data: DiscriminatedEvent.Data<Stripe.Treasury.FinancialAccount>;
      }

      interface TreasuryInboundTransferEvent extends Stripe.Event {
        type:
          | "treasury.inbound_transfer.canceled"
          | "treasury.inbound_transfer.created"
          | "treasury.inbound_transfer.failed"
          | "treasury.inbound_transfer.succeeded";
        data: DiscriminatedEvent.Data<Stripe.Treasury.InboundTransfer>;
      }

      interface TreasuryOutboundPaymentEvent extends Stripe.Event {
        type:
          | "treasury.outbound_payment.canceled"
          | "treasury.outbound_payment.created"
          | "treasury.outbound_payment.expected_arrival_date_updated"
          | "treasury.outbound_payment.failed"
          | "treasury.outbound_payment.posted"
          | "treasury.outbound_payment.returned";
        data: DiscriminatedEvent.Data<Stripe.Treasury.OutboundPayment>;
      }

      interface TreasuryOutboundTransferEvent extends Stripe.Event {
        type:
          | "treasury.outbound_transfer.canceled"
          | "treasury.outbound_transfer.created"
          | "treasury.outbound_transfer.expected_arrival_date_updated"
          | "treasury.outbound_transfer.failed"
          | "treasury.outbound_transfer.posted"
          | "treasury.outbound_transfer.returned";
        data: DiscriminatedEvent.Data<Stripe.Treasury.OutboundTransfer>;
      }

      interface TreasuryReceivedCreditEvent extends Stripe.Event {
        type:
          | "treasury.received_credit.created"
          | "treasury.received_credit.failed"
          | "treasury.received_credit.succeeded";
        data: DiscriminatedEvent.Data<Stripe.Treasury.ReceivedCredit>;
      }

      interface TreasuryReceivedDebitEvent extends Stripe.Event {
        type: "treasury.received_debit.created";
        data: DiscriminatedEvent.Data<Stripe.Treasury.ReceivedDebit>;
      }
    }
  }
}
